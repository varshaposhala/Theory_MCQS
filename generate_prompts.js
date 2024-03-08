import fs from "fs";

import { remark } from "remark";

import dotenv from "dotenv";
dotenv.config()

const parent_json_file_name = process.env.PARENT_JSON_FILE_NAME;
const parent_json_file_path = "./parent_json/" + parent_json_file_name + ".json";
const prompts_file_path = "./prompts_json/" + parent_json_file_name + "_prompts.json";

fs.readFile(parent_json_file_path, "utf8", (readErr, questions_data) => {
  if (readErr) {
    console.error("Error reading the file:", readErr);
    return;
  }

  let questions_data_json = JSON.parse(questions_data);

  fs.readFile("./prompt.md", "utf8", (err, prompt) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    questions_data_json.forEach((questionObj) => {
      let context = questionObj["question_content"];
      let option_1=questionObj["option-1"];
      let option_2=questionObj["option-2"];
      let option_3=questionObj["option-3"];
      let option_4=questionObj["option-4"];
      let number_of_questions = questionObj["number_of_questions"];

      let description = "";

      let context_prompt = prompt.replace("{{context}}", context);
     context_prompt = context_prompt.replace("{{number_of_questions}}", number_of_questions);
     context_prompt=context_prompt.replace("{{option-1}}",option_1);
     context_prompt=context_prompt.replace("{{option-2}}",option_2);
     context_prompt=context_prompt.replace("{{option-3}}",option_3);
     context_prompt=context_prompt.replace("{{option-4}}",option_4);

      remark().process(context_prompt, (err, file) => {
        if (err) throw err;
        description = String(file);
      });

      questionObj.prompt = context_prompt;
    });

    const updatedJsonData = JSON.stringify(questions_data_json, null, 2);

    fs.writeFile(prompts_file_path, updatedJsonData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("Questions With Prompts JSON file updated successfully");
    });
  });
});
