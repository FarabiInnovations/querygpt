import { agent as IntentAgent } from "./agents/intent.ts"
import { agent as TablesAgent } from "./agents/tables.ts"
import { agent as ColumnPrunerAgent } from "./agents/columnPruner.ts"
import { agent as SQLAgent } from "./agents/sqlAgent.ts"
import { agent as SQLExecutionAgent } from "./agents/execution.ts"
import { HumanMessage } from "@langchain/core/messages";

const query = "how many employess per territory do we have?"; 

const result = await IntentAgent.invoke({ messages: [new HumanMessage(query)] });
console.log("========== Intent Agent Result ==========");
console.log(result.messages[result.messages.length - 1].content);
console.log("=========================================");

const result2 = await TablesAgent.invoke(result);
console.log("========== Tables Agent Result ==========");
console.log(result2.messages[result2.messages.length - 1].content);
console.log("=========================================");

const result3 = await ColumnPrunerAgent.invoke(result2);
console.log("===== Column Pruner Agent Result =====");
console.log(result3.messages[result3.messages.length - 1].content);
console.log("======================================");

const result4 = await SQLAgent.invoke(result3);
console.log("=========== SQL Agent Result ===========");
console.log(result4.messages[result4.messages.length - 1].content);
console.log("========================================");

const result5 = await SQLExecutionAgent.invoke(result4);
console.log("====== SQL Execution Agent Result ======");
console.log(result5.messages[result5.messages.length - 1].content);
console.log("=========================================");



