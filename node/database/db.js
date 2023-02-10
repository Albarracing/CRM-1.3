import { Sequelize } from "sequelize";

const db = new Sequelize('dbCRM', 'admin', 'docat2307',{
    host: 'dbcrm.cezkuslxqtkp.us-east-1.rds.amazonaws.com',
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