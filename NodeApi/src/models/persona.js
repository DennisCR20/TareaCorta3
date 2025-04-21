const { DataTypes } = require('sequelize'); // Tipos de datos de Sequelize
const sequelize = require('../config/database'); // Conexión a la BD

// Definición del modelo 'Persona'
const Persona = sequelize.define('Persona', {
    PersonaID: {
        type: DataTypes.STRING(50), // ID tipo texto
        primaryKey: true // Clave primaria
    },
    Nombre: {
        type: DataTypes.STRING(50), // Nombre de la persona
        allowNull: false // Obligatorio
    },
    Tipo: {
        type: DataTypes.TINYINT, // Un número pequeño (por ejemplo: 1 = admin, 2 = usuario)
        allowNull: false
    },
    Gender: {
        type: DataTypes.STRING(10), // Género, por defecto vacío
        defaultValue: ''
    },
    Password: {
        type: DataTypes.STRING(100), // Contraseña en texto (debería ir hasheada)
        defaultValue: ''
    }
}, {
    tableName: 'Persona', // Nombre real de la tabla en la BD
    timestamps: false // No usar createdAt y updatedAt automáticamente
});

module.exports = Persona; // Exporta el modelo
