const express = require('express');
const cors = require('cors');
const app = express();

const municipios = require('./routes/municios');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(municipios);

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});