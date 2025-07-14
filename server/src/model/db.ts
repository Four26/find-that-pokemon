import { Pool } from "pg";
import dotenv from "@dotenvx/dotenvx";
dotenv.config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) throw new Error('Missing environment variables.');

export const pool = new Pool({
    connectionString: DATABASE_URL,
});