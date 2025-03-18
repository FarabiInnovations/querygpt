import { tool } from "@langchain/core/tools";

import { z } from "zod";

const trigger = tool(async ({ query }) => {
    return `
        Customer & Sales Insights,
        Orders & Shipping,
        Product Management,
        Employee & Territories
    `
}, {
  name: "workspaces",
  description: "Provide a list of all workspaces to choose from.",
  schema: z.object({
    query: z.string().describe("Give me the list workspaces to choose from."),
  }),
});

export { trigger };