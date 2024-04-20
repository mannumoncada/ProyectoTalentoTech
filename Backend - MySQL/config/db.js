import { Sequelize } from "sequelize";

const BD = new Sequelize('citasbd','root', '', {
    host: 'localhost',
    dialect: 'mysql'
}) // para establecer la conexión

export default BD;