### Initialization

Installation of nodeJs software from [node](https://nodejs.org/en/download)  
Open this directory in terminal and run `npm install` or `npm i`.

### Pre-requisities

- After downloading your csv file from your spreadsheet, convert your csv into json file [csv_to_json](https://data.page/csv/json)

### Conditions

- Topic Names to be given as per following convention only:  
  for JavaScript - JS  
  for Java - JAVA  
  for SQL - SQL  
  for ReactJS - REACT  
  for NodeJS - NODE  
  for HTML - HTML  
  for CSS - CSS  
  for Python - PYTHON

### Steps

Step-1:- Run the following command in terminal: `node generate_folders.js`.
Step-2:- Replace **parent_json_file_name** variable in .env file.
Step 3:- Create a file with .json extension in **Segregation_folders**.
Step-4:- Run the following command in terminal: `node generate_segregation_prompts.js`.
Step-5:- Run the following command in terminal: `node generate_seggregation_responses1.js`.
Step-6:- Run the following command in terminal: `node generate_final1.js`.
Step-7:- Run the following command in terminal: `node modify.js`.
Step-8:- Now save your obtained json file in **parent_json** directory.  
Step-9:- Run the following command in terminal: `node generate_prompts.js`.  
Step-10:- Run the following command in terminal: `node generate_responses.js`.  
Step-11:- Run the following command in terminal: `node generate_finale.js`.
Step-12:- Run the following command in terminal: `node generate_promptstags.js`.
Step-13:- Run the following command in terminal: `node generate_response_tags.js`.
Step-14:- Run the following command in terminal: `node generate_final_tags.js`.//add resource-name here
Step-15:- Run the following command in terminal: `node generate_final.js`.  
Step-16:- Now You can find your intermediate output file in **responses_json** directory with suffix as "\_responses.json" file.  
Step-17:- Now You can find your final output file in **final_responses_json** directory with suffix as "\_final_responses.json" file.
