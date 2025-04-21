const Persona = require('../models/persona'); // Importa el modelo de Persona desde Sequelize

// Obtener todas las personas
const getAllPersonas = async (req, res) => {
    try {
        const personas = await Persona.findAll(); // Consulta todas las personas de la BD
        res.json(personas); // Devuelve las personas en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message }); // Error interno del servidor
    }
};

// Obtener una persona por ID
const getPersonaById = async (req, res) => {
    try {
        const persona = await Persona.findByPk(req.params.id); // Busca por clave primaria
        if (!persona) return res.status(404).json({ message: "Persona no encontrada" }); // Si no existe
        res.json(persona); // Devuelve la persona
    } catch (error) {
        res.status(500).json({ error: error.message }); // Error interno
    }
};

// Crear una nueva persona
const createPersona = async (req, res) => {
    try {
        const nuevaPersona = await Persona.create(req.body); // Crea la persona con datos del body
        res.status(201).json(nuevaPersona); // Devuelve la nueva persona con código 201
    } catch (error) {
        res.status(400).json({ error: error.message }); // Error de validación u otro
    }
};

// Actualizar una persona existente
const updatePersona = async (req, res) => {
    try {
        const persona = await Persona.findByPk(req.params.id); // Busca persona por ID
        if (!persona) return res.status(404).json({ message: "Persona no encontrada" });

        await persona.update(req.body); // Actualiza los campos recibidos
        res.json(persona); // Devuelve la persona actualizada
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una persona por ID
const deletePersona = async (req, res) => {
    try {
        const persona = await Persona.findByPk(req.params.id); // Busca la persona
        if (!persona) return res.status(404).json({ message: "Persona no encontrada" });

        await persona.destroy(); // Elimina la persona de la base de datos
        res.json({ message: "Persona eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Exporta todas las funciones para ser usadas en las rutas
module.exports = { getAllPersonas, getPersonaById, createPersona, updatePersona, deletePersona };
