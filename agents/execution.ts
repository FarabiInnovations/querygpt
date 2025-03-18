import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { trigger } from "./../tools/sqlite_query.ts";
const model =  new ChatOpenAI({
    model: "gpt-4o-mini",
});
  
const agent = createReactAgent({
    llm: model,
    tools: [trigger],
    prompt: `Execute the SQL query provided by the user, and return the results as a JSON object.
    Ensure that the SQL query is valid and does not contain any syntax errors.
    If the query is invalid, return an error message indicating the issue with the query and provide the query and the corrected one,
    do not return any other text, just the JSON object with the results or the error message,
    do not include any line breaks or extra spaces in the JSON object, and make sure to format the JSON object correctly.`,
});

export { agent };