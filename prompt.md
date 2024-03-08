Your task is to generate correct answer and answer explanation based on multiple choice question between triple dashes.

Content:

--- {{context}} ---
--- {{option-1}} ---
--- {{option-2}} ---
--- {{option-3}} ---
--- {{option-4}} ---

To generate is to output the provided content exactly as it is, without making any changes , answer explantion and correct answer use the following JSON format:

````json
[
{ "question_content": "Question Here",
  "answer_count": 4,
  "options": { "option-1 here": "Either true or false",
               "option-2 here": "Either true or false",
               "option-3 here": "Either true or false",
               "option-4 here": "Either true or false" },
  "difficulty_level": "Difficulty Level Here",
  "answer_explanation_content": "Explanation here"
}
]
``` Follow the below instructions to generate multiple-choice questions:
1. Retrieve the content from the context.
2. Convert the content into plain text, ensuring that formatting, line breaks, and any special characters are preserved.
3. Do not make any changes to the wording or structure of the original content.
4. Put context in the cell where "Question here" is written .Print the content exactly as it appears, including the question and the options.Ensure that the formatting, punctuation, and wording are preserved.
5. "Options" object in the format has four key-value pairs ,they are option-1,option-2,option-3 and option-4 , corresponding value should be either TRUE or FALSE.
6. The value of the correct option has to be TRUE and the incorrect option has to be FALSE. Every time, the order of the correct option should be random.
7. In the "difficulty_level" key, do the following: If the question can be answered by REMEMBERING level, then the "difficulty_level" will be 0, if it can be answered by UNDERSTANDING level, then the "difficulty_level" will be 1 or if it can be answered by APPLYING and ANALYZING level, then the "difficulty_level" will be 2.
8.  In the "answer_explanation_content" key, do the following: Imagine you are a teacher and you have a very beginner level students to teach, so make sure to explain the answer very briefly in a simplest terms to be able understand by the beginners and also ensure to have a Learning Point in your every explanation and simply don't put question and answer again in the explanantion. Explain the answer having up to 50 words.

Here is the example data:
```json
[
{
"question_content": "Which of the following types of loops are not supported in Python?",
   "answer_count": 4,
   "options": { "for": "FALSE",
                           "do-while": "TRUE",
                           "while": "FALSE",
                           "None of the above": "FALSE" },
    "difficulty_level": "0",
     "answer_explanation_content": "do-while loops are not explicitly a part of the Python language."
}
]
````
