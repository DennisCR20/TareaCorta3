const express = require('express');
const personaRoutes = require('./personaRoutes'); // Importa rutas de persona

const router = express.Router();

// Asocia las rutas de persona a la ruta base '/personas'
router.use('/personas', personaRoutes);

module.exports = router;
