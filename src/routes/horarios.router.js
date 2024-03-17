const express = require('express');
const router = express.Router(); 
const horariosController = require('../controllers/horarios.controller');

router
    .get('/', horariosController.get)
    .get('/:id', horariosController.getById)
    .post('/', horariosController.create)
    .put('/:id', horariosController.update)
    .delete('/:id', horariosController._delete);

module.exports = router;
