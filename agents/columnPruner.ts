import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { trigger as dbAgent } from "./../tools/sqlite.ts";

const model =  new ChatOpenAI({
    model: "gpt-4o-mini",
});
  
const agent = createReactAgent({
    llm: model,
    tools: [dbAgent],
    prompt: `Depedning on the query from the user, choose which column are needed for it, 
    and remove any extra columns not needed, using the tool, call it for each table to get the columns for each table, return only the chosen columns ONLY, 
    this is the query: {query}, use the format:
        table1: column1, column2, column3, ...
        table2: column1, column2, column3, ...
        table3: column1, column2, column3, ...
    `,
});

export { agent };