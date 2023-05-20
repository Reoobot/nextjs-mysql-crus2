import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Merida.2',
    port: 3306,
    database: 'productsdb'
});

export {pool};