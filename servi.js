const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.sendFile('./static/index.html', {
        root: __dirname
    });
});

app.get('/calculadora',(req, res)=>{
    res.send(`Numero 1: ${req.query.num1}, Numero 2: ${req.query.num2}, Opción: ${req.query.opcion}`);
});
app.listen(3000);
console.log('Server on port ${3000}');