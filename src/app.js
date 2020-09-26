const express = require('express');
const app = express();


//importar os arquivos de rota
const index = require('./route/index');
const restaurantes = require('./route/restaurantesRoute')

app.use((req, res, next) => {
    console.log('Nova requisicao realizada')

    next();
})

app.use('/', index);
app.use('/restaurantes', restaurantes);

module.exports = app;