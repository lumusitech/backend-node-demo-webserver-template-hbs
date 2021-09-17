const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/elements', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'elements.html'))
})

app.get('/generic', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'generic.html'))
})

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});