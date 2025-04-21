require('dotenv').config(); // Carga variables de entorno desde .env
const app = require('./src/app'); // Importa la app de Express
const sequelize = require('./src/config/database'); // Conexión a la BD

const PORT = process.env.PORT || 3000; // Puerto de escucha

// Sincroniza los modelos con la BD y luego arranca el servidor
sequelize.sync()
    .then(() => console.log("✅ Base de datos sincronizada"))
    .catch(err => console.error("❌ Error al sincronizar:", err));

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
