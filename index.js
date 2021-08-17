const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.json('Ok');
});

app.listen(3000, () => {
    console.log('Server start at port 3000');
});
