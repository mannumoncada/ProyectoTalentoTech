const express = require('express');
const router = express.Router();
const SedesController = require ('../controllers/SedesController');

// Rutas del CRUD
router.post('/', SedesController.agregarSedes);
router.get('/', SedesController.mostrarSedes);
router.get('/:id', SedesController.mostrarUnaSede);
router.delete('/:id', SedesController.eliminarSedes);
router.put('/:id', SedesController.actualizarSedes);

module.exports = router;