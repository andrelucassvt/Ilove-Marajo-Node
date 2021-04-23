const Sequelize = require("sequelize");
const database = require("../config/config");

const Municipios = database.define('municipios', {
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