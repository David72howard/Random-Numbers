const express = require('express');
const app = express();

const path = require('path');
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/rand', (req, res) => {
    const num =  Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})

app.get('*', (req, res) => {
    res.send(`I'm sorry we could not find that page.`)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})