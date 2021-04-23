const Municipios = require("../model/municipio");
const Status = require('http-status');

module.exports = {
	index(req, res) {
		return res.json({ Municipios: 'Marajó' });
	},

	async buscarTodos(req, res) {
		try {
			const municipios = await Municipios.findAll();

			return res.json(municipios);
		} catch (error) {
			console.log(error);
			console.log('Erro ao buscar os dados!!');
		}
	},

	async buscarUm(req, res) {
		const id = req.params.id;

		try {
			const municipio = await Municipios.findByPk(id);

			return res.json(municipio);
		} catch (error) {
			console.log(erro);
			console.log('Erro ao busca o municipio');
		}
	},

	async criar(req, res) {
		const nomeMunicipio = req.body;

		try {
			const postDados = await Municipios.create({
				nome: nomeMunicipio.nome
			});

			//return res.send('Nome salvo!!')
			return res.json(postDados);
		} catch (error) {
			console.log(error);
			console.log('Erro ao salvar os dados!!');
		}
	},
	
	async atualizar(req, res) {

	},
	/*atualizar(request, response, next)   {
			const id = request.params.id;
			const nome = request.body.nome;
	
			Spoiler.findById(id).then((municipio) => {
				if (municipio) {
					municipio.update({
						nome:nome
					}, { where: { id: id } }).then(() => {
						response.send();
					}).catch((error) => next(error));
				} else {
					response.status(Status.NOT_FOUND).send();
				}
			}).catch((error) => next(error));
	},*/

	async excluir(req, res) {

	}
	/*excluir(request, response, next) {
		const id = request.params.id;

		municipio.findById(id).then((municipio) => {
				if (municipio) {
					municipio.destroy({
						where: { id: id }
					}).then(() => {
						response.send();
					}).catch((error) => next(error));
				} else {
					response.status(Status.NOT_FOUND).send();
				}
		}).catch((error) => next(error));
	}*/
}