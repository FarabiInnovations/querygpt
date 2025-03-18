import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { trigger as workspaces } from "./../tools/workspaces.ts";

const model =  new ChatOpenAI({
    model: "gpt-4o-mini",
});
  
const agent = createReactAgent({
    llm: model,
    tools: [workspaces],
    prompt: `Given the workspaces {workspaces}, identify the relevant workspace(s) involved in the query from the user. Return the workspaces as a comma-separated list.
    use the format: workspace1, workspace2, workspace3, ...`,
});

export { agent };