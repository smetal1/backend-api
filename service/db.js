const Sequelize = require('sequelize');
const { DB_DIALECT,DATABASE_USER_SERVICE,DATABASE_USERNAME,DATABASE_PASSWORD,DATABASE_HOST } = require("../config") 

module.exports.getDbService=function(){
try {
    
    return new Sequelize(DATABASE_USER_SERVICE,DATABASE_USERNAME,DATABASE_PASSWORD, {
        host: DATABASE_HOST,
        dialect: DB_DIALECT
      });
}catch(e){
    console.log("ERROR (DB Connection) - ", e)
}
}