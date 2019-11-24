'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubtypeSchema extends Schema {
  up () {
    this.create('subtypes', (table) => {
      table.increments()
      table.string('name', 250).notNullable()
    })
  }

  down () {
    this.drop('subtypes')
  }
}

module.exports = SubtypeSchema
