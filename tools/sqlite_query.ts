import sqlite from 'sqlite3';
const { Database } = sqlite;
import { tool } from "@langchain/core/tools";

import { z } from "zod";

const trigger = tool(async ({ query }) => {
    const db = new Database('./data/northwind.db')
    return new Promise((resolve, reject) => {
        db.all(`${query}`, [], (err, rows) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve({ result: JSON.stringify(rows, null, 2), next: "end" });
        });
      });
}, {
  name: "dbquery",
  description: "Execute a query against the SQLite database and return the result.",
  schema: z.object({
    query: z.string().describe("Provide the SQL query to execute against the SQLite database."), // e.g., "SELECT * FROM Customers"
  }),
});

export { trigger };