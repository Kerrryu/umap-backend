'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingTypesSchema extends Schema {
  up () {
    this.create('building_types', (table) => {
      table.increments()
      table.string('name', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('building_types')
  }
}

module.exports = BuildingTypesSchema
