const Sequelize=require('sequelize')
const db = require('../../../service/db').getDbService();

var modelDefination = {
    ID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    CountryCode:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    District:{
        type: Sequelize.CHAR,
        allowNull: false,
    },
    Population: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

const modelOptions={ 
    timestamps: false,
}

const City = db.define('city',modelDefination,modelOptions);

module.exports = City;