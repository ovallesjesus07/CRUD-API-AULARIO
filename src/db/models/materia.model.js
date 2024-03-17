const { Model, DataTypes } = require('sequelize');

const MATERIA_TABLE = 'materias';

class Materia extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MATERIA_TABLE,
            modelName: 'Materia',
            timestamps: true
        };
    }
}

const MateriaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.TEXT
    }
};

module.exports = { Materia, MateriaSchema };