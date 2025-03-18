import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";

const model =  new ChatOpenAI({
    model: "gpt-4o-mini",
});
  
const agent = createReactAgent({
    llm: model,
    tools: [],
    prompt: `Depedning on the query from the user, and all the context you have about the 
    table and columns you can use, create a SQL query for SQLite that will cover the scenario in the 
    user's query and also in the context of the columns and tables provided, 
    return only the SQL query as text, no line breaks, also make sure you keep the table names as is, 
    do not remove spaces from the names, in the SQL statement, put the table names in backticks`,
});

export { agent };