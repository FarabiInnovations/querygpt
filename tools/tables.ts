import { tool } from "@langchain/core/tools";

import { z } from "zod";

const trigger = tool(async ({ query }) => {
    return `
        1. Customer & Sales Insights
            Customers
            CustomerDemographics
            CustomerCustomerDemo
            Customer and Suppliers by City
            Suppliers
            Sales Totals by Amount
            Sales by Category
            Category Sales for 1997
            Product Sales for 1997
            Summary of Sales by Quarter
            Summary of Sales by Year
        2. Orders & Shipping
            Orders
            Order Details
            Order Details Extended
            Order Subtotals
            Orders Qry
            Quarterly Orders
            Invoices
            Shippers
            Territories
            Regions
        3. Product Management
            Products
            Categories
            Current Product List
            ProductDetails_V
            Products Above Average Price
            Products by Category
            Alphabetical list of products        
        4. Employee & Territories
            Employees
            EmployeeTerritories
            Territories
            Regions
    `
}, {
  name: "tables",
  description: "Provide a list of tables for business domains",
  schema: z.object({
    query: z.string().describe("Give me the tables for a certain business domain."),
  }),
});

export { trigger };