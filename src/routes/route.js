import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
    res.render('index');
});

route.get('/register', (req, res) => {
    res.render('register');
});

export default route;