import dotenv from "dotenv"
dotenv.config();

export function connection_pool() {
    const Pool = require('pg').Pool
    const pool = new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT_DB
    })
    return pool
}