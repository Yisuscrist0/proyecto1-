const express = require('express');
const calculadora = require("./calculadora.js");

const app = express();

app.get('/', (req, res) =>{
    res.sendFile('./static/index.html', {
        root: __dirname
    });
});

app.get('/calculadora',(req, res)=>{
    // res.send(`Numero 1: ${req.query.num1}, Numero 2: ${req.query.num2}, Opción: ${req.query.opcion}`);
    
    let numeros = [req.query.num1, req.query.num2];
    let opcion = req.query.opcion
    let resultado = calculadora(numeros,opcion);

    res.send(`Tu resultado es: ${resultado}`);
});
app.listen(3000);
console.log('Server on port ${3000}');