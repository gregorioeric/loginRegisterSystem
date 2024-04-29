import express from 'express';
import route from './src/routes/route.js';
import auth from './src/routes/auth.js';

const app = express();
const port = 6500;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static('public'));


app.use('/', route);
app.use('/auth', auth);

app.listen(port, () => { console.log(`http://localhost:${port}`); });