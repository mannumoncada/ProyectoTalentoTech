const mongoose = require('mongoose');
require('dotenv').config();

// Función para realizar la conexión
const conectarBD = () => {
    // se lanza una promesa
    mongoose
    .connect(process.env.MONGO_URL) 
    .then(() => console.log('El servidor está conectado con MongoDB'))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;
