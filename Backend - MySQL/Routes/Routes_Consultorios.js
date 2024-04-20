// importación de dependencia express
import express from 'express';

// importación del controlador
import {agregarConsultorio, mostrarTodosConsultorios, mostrarConsultorio, modificarConsultorio, eliminarConsultorio} from '../Controllers/ConsultoriosController.js';

const router = express.Router();

// se agregan las rutas para los métodos del controller
router.post('/', agregarConsultorio);
router.get('/', mostrarTodosConsultorios);
router.get('/:id', mostrarConsultorio);
router.put('/:id', modificarConsultorio);
router.delete('/:id', eliminarConsultorio);

// exportación de la ruta
export default router;

