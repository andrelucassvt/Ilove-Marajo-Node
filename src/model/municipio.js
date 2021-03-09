const Sequelize = require("sequelize");
const sequelize = require("../database/database");


const Municipios = sequelize.define('municipios',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },

    nome:{
        allowNull: false,
        type: Sequelize.STRING(100),
    }
})


module.exports = Municipios;