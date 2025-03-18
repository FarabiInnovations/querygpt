import { agent as IntentAgent } from "./agents/intent.ts"
import { agent as TablesAgent } from "./agents/tables.ts"
import { agent as ColumnPrunerAgent } from "./agents/columnPruner.ts"
import { agent as SQLAgent } from "./agents/sqlAgent.ts"
import { HumanMessage } from "@langchain/core/messages";
const query = "how much every customer spent with us?"; 

const result = await IntentAgent.invoke({ messages: [new HumanMessage(query)] });
console.log("Intent Agent Result: ", result.messages[result.messages.length -1].content);
const result2 = await TablesAgent.invoke(result);
console.log("Tables Agent Result: ", result2.messages[result2.messages.length -1].content)
const result3 = await ColumnPrunerAgent.invoke(result2);
console.log("Column Pruner Agent Result: ", result3.messages[result3.messages.length -1].content)
const result4 = await SQLAgent.invoke(result3);
console.log("SQL Agent Result: ", result4.messages[result4.messages.length -1].content)



