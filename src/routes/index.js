const express = require('express');
const usuariosRouter = require('./usuarios.router');
const materiasRouter = require('./materias.router');
const horariosRouter = require('./horarios.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/usuarios', usuariosRouter);
    router.use('/materias', materiasRouter);
    router.use('/horarios', horariosRouter);
}

module.exports = routerApi;
