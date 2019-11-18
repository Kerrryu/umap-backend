'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingSchema extends Schema {
  up () {
    this.create('buildings', (table) => {
      table.increments()
      table.string('name', 250).notNullable()
      table.integer('type')
      table.timestamps()
    })
  }

  down () {
    this.drop('buildings')
  }
}

module.exports = BuildingSchema
