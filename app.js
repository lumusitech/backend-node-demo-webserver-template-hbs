const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = 3000;

app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Luciano Figueroa',
        title: 'Portfolio - lumusitech'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Luciano Figueroa',
        title: 'Portfolio - lumusitech'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Luciano Figueroa',
        title: 'Portfolio - lumusitech'
    })
})

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});