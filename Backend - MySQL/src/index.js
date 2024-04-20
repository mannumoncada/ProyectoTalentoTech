// se importan las dependencias
import express from 'express';
import cors from 'cors';

// se importa la configuración de la BD
import BD  from '../config/db.js';

// se importan los archivos para las rutas
import citasRoutes from '../Routes/Routes_Citas.js'
import consultoriosRoutes from '../Routes/Routes_Consultorios.js'


// definición de variable app para usar express
const app = express();
app.use(cors());
app.use(express.json());

// rutas para BD
app.use('/citas', citasRoutes);
app.use('/consultorios', consultoriosRoutes);

// autenticación BD
try {
    await BD.authenticate();
    console.log('La conexión se ha establecido exitosamente.');
  } catch (error) {
    console.error('No se ha podido conectar a la base de datos:', error);
  }

// mensaje de prueba para navegador
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

// configuración del puerto para el servidor
app.listen(5000, () =>{
    console.log('El servidor está corriendo en http://localhost:5000/')
});

