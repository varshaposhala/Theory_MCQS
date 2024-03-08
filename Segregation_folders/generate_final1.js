import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const parent_json_file_name = process.env.PARENT_JSON_FILE_NAME;
const questions_response_path = "./prompts_segregation_responses.json/" + parent_json_file_name + "_responses.json";
const final_responses_path = "./final_segregation_responses1/" + parent_json_file_name + "_final_responses.json";

const readFileAsync = async (file, options) =>
  await new Promise((resolve, reject) => {
    fs.readFile(file, options, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

async function getPromptResponses() {
  try {
    const questions_prompts = await readFileAsync(questions_response_path, "utf8");
    const questions_prompts_json = JSON.parse(questions_prompts);
    return questions_prompts_json;
  } catch (error) {
    console.error("Error reading question prompts:", error);
    throw error;
  }
}

const extractQuestionsData = (prompt_responses) => {
  let final_json_sheet = [];

  prompt_responses.forEach(prompt_response => {
    const startIndex = prompt_response["prompt_response"].indexOf("[");
    const endIndex = prompt_response["prompt_response"].lastIndexOf("]");

    const prompt_response_json = JSON.parse(prompt_response["prompt_response"].slice(startIndex, endIndex + 1));
  
    prompt_response_json.forEach(response => {
      let question_data = {};
      question_data["type"] = response["type"];
      question_data["question_content"] = response["question_content"];
      question_data["option-1"] = response["option-1"]||"";
      question_data["option-2"] = response["option-2"] || "";
      question_data["option-3"] = response["option-3"] || "";
      question_data["option-4"] = response["option-4"] || "";
      

      final_json_sheet.push(question_data);
    });
  });

  console.log("\nWriting into file\n");
  const jsonData = JSON.stringify(final_json_sheet);
  fs.writeFile(final_responses_path, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing the file:', err);
      return;
    }
    console.log('JSON file has been created successfully!');
  });
};

async function start() {
  try {
    const prompt_responses = await getPromptResponses();
    extractQuestionsData(prompt_responses);
  } catch (error) {
    console.error("Error during processing:", error);
  }
}

start();
