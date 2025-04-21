const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Ayuda con seguridad HTTP
const routes = require('./routes'); // Importa rutas agrupadas

const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use(cors());         // Permite CORS
app.use(helmet());       // Añade cabeceras de seguridad

// Ruta base para la API
app.use('/api', routes);

module.exports = app;
