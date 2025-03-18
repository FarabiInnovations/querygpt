import sqlite from 'sqlite3';
const { Database } = sqlite;
import { tool } from "@langchain/core/tools";

import { z } from "zod";

const trigger = tool(async ({ query }) => {
    const db = new Database('./data/northwind.db')
    return new Promise((resolve, reject) => {
        db.all(`PRAGMA table_info('${query}')`, [], (err, rows) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve({ result: JSON.stringify(rows, null, 2), next: "end" });
        });
      });
}, {
  name: "columns",
  description: "Provide a list of columns for a table",
  schema: z.object({
    query: z.string().describe("Give me the columns for a certain table."),
  }),
});

export { trigger };