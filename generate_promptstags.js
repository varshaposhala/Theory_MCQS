import fs from "fs";

import { remark } from "remark";

import dotenv from "dotenv";
dotenv.config()

const parent_json_file_name = process.env.PARENT_JSON_FILE_NAME;
const parent_json_file_path = "./final_e/" + parent_json_file_name + "_final_E.json";
const prompt_paraphrase_json_file_path = "./Tags/" + parent_json_file_name + "_tags.json";

fs.readFile(parent_json_file_path, "utf8", (readErr, questions_data) => {
  if (readErr) {
    console.error("Error reading the file:", readErr);
    return;
  }

  let questions_data_json = JSON.parse(questions_data);
  

  fs.readFile("./prompts_tags.md", "utf8", (err, prompt) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    questions_data_json.forEach((questionObj) => {
      let problem_text = questionObj["question_content"];
     
      let problem_prompt = prompt
    .replace("{{Question}}", problem_text);
      let description = "";
      remark().process(problem_prompt, (err, file) => {
        if (err) throw err;
        description = String(file);
      });

      questionObj.prompt = problem_prompt;
    });

    const updatedJsonData = JSON.stringify(questions_data_json, null, 2);

    fs.writeFile(prompt_paraphrase_json_file_path, updatedJsonData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("Questions With Prompts JSON file updated successfully");
    });
  });
});
