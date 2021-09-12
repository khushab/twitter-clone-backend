const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    password: 'lmnopqrst',
    database: 'todo_database',
    host: 'localhost',
    port: 5432
})

module.exports = pool