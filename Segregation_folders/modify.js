import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const parent_json_file_name = process.env.PARENT_JSON_FILE_NAME;
const parent_json_file_path = "./final_segregation_responses1/" + parent_json_file_name + "_final_responses.json";
const prompts_file_path = "./final_seggregation/" + parent_json_file_name + "_responses.json";

fs.readFile(parent_json_file_path, "utf8", (readErr, questions_data) => {
  if (readErr) {
    console.error("Error reading the file:", readErr);
    return;
  }

  try {
    const parsedData = JSON.parse(questions_data);

    const transformedData = parsedData.reduce((acc, question) => {
      const { type, question_content, ...rest } = question;
      if (!acc[type]) {
        acc[type] = { topic: type, questions: [] };
      }
      acc[type].questions.push({ question_content, ...rest });
      return acc;
    }, {});

    const jsonString = JSON.stringify(transformedData, null, 2);

    fs.writeFile(prompts_file_path, jsonString, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("Questions With Prompts JSON file updated successfully");
    });
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
