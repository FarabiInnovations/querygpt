import { agent as IntentAgent } from "./agents/intent.ts"
import { agent as TablesAgent } from "./agents/tables.ts"
import { agent as ColumnPrunerAgent } from "./agents/columnPruner.ts"
import { agent as SQLAgent } from "./agents/sqlAgent.ts"
import { agent as SQLExecutionAgent } from "./agents/execution.ts"
import { HumanMessage } from "@langchain/core/messages";
import { END, START, StateGraph, MessagesAnnotation } from "@langchain/langgraph"

const query = "how many employess do we have?"; 


const workflow = new StateGraph(MessagesAnnotation)
workflow.addNode("IntentAgent", IntentAgent);
workflow.addNode("TablesAgent", TablesAgent);
workflow.addNode("ColumnPrunerAgent", ColumnPrunerAgent);
workflow.addNode("SQLAgent", SQLAgent);
workflow.addNode("SQLExecutionAgent", SQLExecutionAgent);

workflow.addEdge(START, "IntentAgent");
workflow.addEdge("IntentAgent", "TablesAgent");
workflow.addEdge("TablesAgent", "ColumnPrunerAgent");
workflow.addEdge("ColumnPrunerAgent", "SQLAgent");
workflow.addEdge("SQLAgent", "SQLExecutionAgent");
workflow.addEdge("SQLExecutionAgent", END);

const app = workflow.compile();
const result = await app.invoke({ messages: [new HumanMessage(query)] });


console.log("========== Final Result ==========");
console.log(result.messages[result.messages.length - 1].content);
console.log("=================================");

