const { Usuario, UsuarioSchema } = require('./usuario.model');
const { Materia, MateriaSchema } = require('./materia.model');
const { Horario, HorarioSchema } = require('./horario.model');

function setupModels(sequelize) {
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    Materia.init(MateriaSchema, Materia.config(sequelize));
    Horario.init(HorarioSchema, Horario.config(sequelize));
}

module.exports = setupModels;
