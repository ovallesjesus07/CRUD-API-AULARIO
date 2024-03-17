const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'usuarios';

class Usuario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'Usuario',
            timestamps: true
        };
    }
}

const UsuarioSchema = {
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
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    rol_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'id'
        }
    }
};

module.exports = { Usuario, UsuarioSchema };
