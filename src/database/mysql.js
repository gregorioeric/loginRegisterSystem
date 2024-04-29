import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('connected');
    }
})

export default db;