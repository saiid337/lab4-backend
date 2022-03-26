const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.set('port', PORT);

app.use(express.static('public'));
app.use(express.static('src'));











app.listen(PORT, () => { 
    console.log(`App running on port ${PORT}`) 
});