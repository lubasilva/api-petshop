const roteador = require('express').Router();


roteador.use('/', (req, res) => {
    res.send('Ok fornecedores')
});


module.exports = roteador;