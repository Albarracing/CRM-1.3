import { Sequelize } from "sequelize";

const db = new Sequelize('crm_prueba', 'root', 'Cortina.11.Planta',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})
// const getConnection = ()=> {
//     return db
//   }
// module.exports = {
//     getConnection
// }

export default db