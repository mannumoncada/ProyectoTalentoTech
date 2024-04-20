// se importa el modelo
import Citas from '../Models/Citas.js'

// creación de métodos CRUD
// función para agregar citas
export const agregarCitas = async (req, res) => {
    try {
        //no necesita que se declare una variable
        // se puede invocar el await inmediatamente
        await Citas.create(req.body)
        res.json({msg: 'Cita creada existosamente'});

    } catch (error) {
        res.json({msg: error.message});
    }
}

// función para mostrar todas las citas
export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas);
    } catch (error) {
        res.json({msg: error.message})
    }
}

// función para mostrar una sola cita
export const getCita = async (req, res) => {
    try {
        const cita = await Citas.findAll({
            where:{id:req.params.id}
        });
        res.json(cita[0]);
    } catch (error) {
        res.json({msg: error.message})
    }
}

// función para modificar una cita
export const modificarCita = async (req, res) => {
    try {
        await Citas.update(req.body, {
            where:{id: req.params.id}
        })
        res.json({ msg: "La cita se ha modificado"})
    } catch (error) {
        res.json({msg: error.message})
    }
}

// función para eliminar una cita
export const eliminarCita = async (req, res) => {
    try {
        let citas = await Citas.destroy({where:{id: req.params.id}});
        if (!citas[0]){
            res.json({msg: "La cita solicitada no existe"})
        }
        res.json({msg: "Se ha eliminado la cita"})
    } catch (error) {
        res.json({msg: error.message})
    }
}
