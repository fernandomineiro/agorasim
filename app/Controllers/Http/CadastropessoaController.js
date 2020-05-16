'use strict'

const fs=require('fs');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cadastropessoas
 */
const Database = use('Database')
class CadastropessoaController {
  /**
   * Show a list of all cadastropessoas.
   * GET cadastropessoas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new cadastropessoa.
   * GET cadastropessoas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */ 
  async create ({ request, response, view, send }) {
    var nome = request.input('nome');
    var cps = request.input('cpf');
    var data = request.input('data');
    var aceito = request.input('aceito');
    
    
    const a = await Database.raw(`SELECT * FROM pessoa WHERE cpf = '${cps}'`)
   
      return response.send(a);
   
  }

  async a ({ request, response, view, send }) {
    const nome = request.input('nome')
    const cpd = request.input('cpf')
    const data = request.input('data')
    const aceito = request.input('aceito')
    
    
    const a = await Database.raw(`INSERT INTO pessoa (nome, cpf, data, tipo)
    VALUES ('${nome}', '${cpd}', '${data}', '${aceito}')`)
   
      return response.send(a);
  }

  async b ({ params , request, response, view, send, }) {
    const cpq = params.cpf  
    //const img = request.input('img')
    const opa = request.input('images')
    for(const {image} of opa){
      const filename = `${Date.now()}.png`;
      const zz = 'users-images/'+filename;
      fs.writeFile('users-images/'+filename, image, 'base64', console.log)
      const b = await Database.raw(`INSERT INTO imagem (cpf_pessoa, imagem)
      VALUES ('${cpq}', '${zz}')`)
     
        return response.send(b);
    }
    
 
  
 
  }



}

module.exports = CadastropessoaController
