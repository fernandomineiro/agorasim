'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CadastropessoaSchema extends Schema {
  up () {
    this.create('cadastropessoas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cadastropessoas')
  }
}

module.exports = CadastropessoaSchema
