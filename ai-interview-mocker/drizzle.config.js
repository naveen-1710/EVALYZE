/** @type {import("drizzle-kit").Config}*/
export default{
    schema:"./utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:2BSICoQLK5Zt@ep-falling-bird-a8xybsa9.eastus2.azure.neon.tech/ai-interview?sslmode=require'
    }
};