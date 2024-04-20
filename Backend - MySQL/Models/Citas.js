// se importa la configuración de la BD
import BD from "../config/db.js";

import { DataTypes } from "sequelize";

// se establecen los campos del modelo para la BD
const Citas = BD.define('citas', {
    nombre_medico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

// se exporta el modelo
export default Citas;
