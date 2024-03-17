const express = require('express');
const router = express.Router(); 
const materiasController = require('../controllers/materias.controller');

router
    .get('/', materiasController.get)
    .get('/:id', materiasController.getById)
    .post('/', materiasController.create)
    .put('/:id', materiasController.update)
    .delete('/:id', materiasController._delete);

module.exports = router;
