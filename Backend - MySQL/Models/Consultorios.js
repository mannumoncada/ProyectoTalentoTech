// importación de la configuración para la base de datos
import BD from "../config/db.js";

// importación de los tipos de datos de Sequelize
import { DataTypes } from "sequelize";

// creación del modelo para Consultorio
const Consultorios = BD.define('consultorios', {
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false

    },
    piso: {
        type: DataTypes.STRING,
        allowNull: false

    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false

    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false

    },
    disponibilidad: {
        type: DataTypes.BOOLEAN,
        allowNull: false

    },
    instrumentos: {
        type: DataTypes.BOOLEAN,
        allowNull: false

    },
});

// exportación del modelo
export default Consultorios;