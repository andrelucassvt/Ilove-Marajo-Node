const http = require('http');
const express = require('express');
const municipiosRouts = require('./routes/rotasMunicipio');
const sequelize = require('./config/config');
const status = require('http-status');

const app = express();
const port = 3000;

app.use(express.json());
app.use(municipiosRouts);

app.use((request, response, next) => {
  response.status(status.NOT_FOUND).send();
});

app.use((error, request, response, next) => {
  response.status(status.INTERNAL_SERVER_ERROR).json({ error });
});

app.listen(port || process.env.PORT, () => {
  console.log(`Server iniciado em http://localhost:${port}`);
});

(async () => {
	try {
		await sequelize.sync({ force: true });
		console.log('Conecao com o banco de dados feita com sucesso!!');
	} catch (error) {
		console.error('Erro ao connectar com o banco de dados:', error);
	}
})();
