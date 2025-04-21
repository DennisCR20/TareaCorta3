const express = require('express');
const {
    getAllPersonas,
    getPersonaById,
    createPersona,
    updatePersona,
    deletePersona
} = require('../controllers/personaController'); // Importa controladores

const router = express.Router();

// Define las rutas RESTful
router.get('/', getAllPersonas);         // GET /personas
router.get('/:id', getPersonaById);      // GET /personas/:id
router.post('/', createPersona);         // POST /personas
router.put('/:id', updatePersona);       // PUT /personas/:id
router.delete('/:id', deletePersona);    // DELETE /personas/:id

module.exports = router;
