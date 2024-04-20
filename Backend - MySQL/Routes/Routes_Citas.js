// se importa las dependencias
import express from 'express';

// se importa el controlador
import { agregarCitas, getAllCitas, getCita, modificarCita, eliminarCita } from '../Controllers/CitasController.js';

const router = express.Router();

// se añaden las rutas para los métodos del controller
router.post('/', agregarCitas);
router.get('/', getAllCitas);
router.get('/:id', getCita);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);

// se hace la exportación
export default router;
