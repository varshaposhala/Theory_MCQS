Your task is to segregate the questions based on given instructions.

Content:

--- {{context}} ---

````json
[{
    "type":"type here",
     "question_content": "Question Here",
 "option-1 ": "option-1 here",
  "option-2 ": "option-2 here",
  "option-3 ": "option-3 here",
  "option-4 ": "option-4 here"}

]
``` Follow the below instructions to segregate multiple-choice questions:
1. Retrieve the content from the context.
2. segregate the question based on the type .
3. Understand the question,and based on the question choose the type ,which is given below.
4. type=[coding,coding_analysis,technical,instructions,verbel,quantative].
5. One type can have any number of questions ,so under the type there may be any number of questions in json.
3. Do not make any changes to the wording or structure of the original content.
4. Put context in the cell where "Question here" is written .Print the content exactly as it appears, including the question and the options.Ensure that the formatting, punctuation, and wording are preserved.
5. "Options" object in the format has four key-value pairs ,they are option-1,option-2,option-3 and option-4 in the given "options" object in the context.
6. After the segregation ,under one type there may be multiple question jsons.

Here is the example data:
```json
[
    {

"type":"technical"

"question_content": "Which of the following types of loops are not supported in Python?",
   "answer_count": 4,
  "for": "FALSE",
                           "do-while": "TRUE",
                           "while": "FALSE",
                           "None of the above": "FALSE"
}
]
````
