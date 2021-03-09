const municipio = require("../model/municipio");
const Status = require('http-status')

exports.buscarUm = (request,response,next)=>{
    const id = request.params.id

    municipio.findById(id).then(municipio=>{
        if (municipio) {
            response.send(municipio)
        } else {
            response.status(Status.NOT_FOUND).send();
        }
    }).catch(error=>next(error))
}


exports.buscarTodos =(request,response,next)=>{

    municipio.findAll().then((municipio)=>{
        if (municipio) {
            response.send(municipio)
        } else {
            response.status(Status.NOT_FOUND).send()
        }
    }).catch(error=>next(error))
}

exports.criar = (request,response,next)=>{
    const nome = request.body.nome

    municipio.create({
        nome: nome
    }).then(()=>{
        response.status(Status.CREATE).send()
    }).catch(error=>next(error))
}


exports.atualizar = (request, response, next) => {
    const id = request.params.id

    const nome = request.body.nome

    Spoiler.findById(id).then((municipio) => {
        if (municipio) {
            municipio.update({
                nome:nome
            }, { where: { id: id } }).then(() => {
                response.send()
            }).catch((error) => next(error))
        } else {
            response.status(Status.NOT_FOUND).send()
        }
    }).catch((error) => next(error))
}

exports.excluir = (request, response, next) => {
    const id = request.params.id

    municipio.findById(id).then((municipio) => {
        if (municipio) {
            municipio.destroy({
                where: { id: id }
            }).then(() => {
                response.send()
            }).catch((error) => next(error))
        } else {
            response.status(Status.NOT_FOUND).send()
        }
    }).catch((error) => next(error))
}