import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { trigger as tables } from "./../tools/tables.ts";

const model =  new ChatOpenAI({
    model: "gpt-4o-mini",
});
  
const agent = createReactAgent({
    llm: model,
    tools: [tables],
    prompt: `Depedning on the query from the user and the provided workspaces which are the business domains, choose tables to use, 
    could be multiple ones, return only the chosen tables ONLY and make sure you return the names of the tables as is, 
    do not alter the names in anyway, use the format: table1, table2, table3, ...`,
});

export { agent };