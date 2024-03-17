const { Model, DataTypes } = require('sequelize');

const HORARIO_TABLE = 'horarios';

class Horario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: HORARIO_TABLE,
            modelName: 'Horario',
            timestamps: true
        };
    }
}

const HorarioSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    materia_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'materias',
            key: 'id'
        }
    },
    dia_semana: {
        allowNull: false,
        type: DataTypes.STRING
    },
    hora_inicio: {
        allowNull: false,
        type: DataTypes.TIME
    },
    hora_fin: {
        allowNull: false,
        type: DataTypes.TIME
    }
};

module.exports = { Horario, HorarioSchema };
