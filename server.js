import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
import route from './src/routes/route.js';

const app = express();
const port = 6500;

dotenv.config({ path: './.env' })

const db = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static('public'));

db.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('connected');
    }
})

app.use('/', route);

app.listen(port, () => { console.log(`http://localhost:${port}`); });