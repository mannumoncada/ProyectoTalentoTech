const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// Configuración de Express y puerto
const app = express();
const port = 5000;
app.use(express.json());

// Rutas de los módulos
app.use('/api/clientes', require('../routes/RoutesCliente')); // configuración del router ya esta hech
app.use('/api/sedes', require('../routes/RoutesSedes'));

// Enlace de conexión de la base de datos
conectarBD();
app.use(cors());

// Configuración del puerto 
app.listen(port, () => console.log('El servidor se encuentra conectado http://localhost:5000', port));

app.get('/', (req, res) => {
    res.send('El servidor ya está configurado');
});


