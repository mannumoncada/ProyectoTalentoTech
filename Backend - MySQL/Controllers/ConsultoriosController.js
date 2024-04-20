// importación del modelo
import Consultorios from "../Models/Consultorios.js";

//métodos
// función para agregar un consultorio
export const agregarConsultorio = async (req, res) => {
    try {
        await Consultorios.create(req.body);
        res.json({msg: 'Consultorio agregado a la lista'})
    } catch (error) {
        res.json({msg: error.message});
    }
}

// función para ver todos los consultorios
export const mostrarTodosConsultorios = async (req, res) => {
    try {
        const consultorios = await Consultorios.findAll();
        res.json(consultorios);
    } catch (error) {
        res.json({msg: error.message});
    }
}

// función para ver un solo consultorio
export const mostrarConsultorio = async (req, res) => {
    try {
        const consultorios = await Consultorios.findAll({
            where:{id: req.params.id}
        })
        res.json(consultorios[0]);
    } catch (error) {
        res.json({msg: error.message});
    }
}

// función para modificar elementos de un consultorio
export const modificarConsultorio = async (req, res) => {
    try {
        let consultorios = await Consultorios.update(req.body, {
            where:{id: req.params.id}
        })
        if(!consultorios[0]){
            res.json({msg: 'El consultorio solicitado no existe'})
        }
        res.json({msg: 'Información del consultorio modificada con éxito'})
        
    } catch (error) {
        res.json({msg: error.message});

    }
}

// función para eliminar un consultorio del listado
export const eliminarConsultorio = async (req, res) => {
    try {
        let consultorios = await Consultorios.destroy({where:{id: req.params.id}});
        res.json({msg: 'Se ha eliminado el consultorio del listado'})
    } catch (error) {
        res.json({msg: error.message});
    }
}