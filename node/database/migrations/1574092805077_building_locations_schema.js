'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingLocationsSchema extends Schema {
  up () {
    this.create('building_locations', (table) => {
      table.increments()
      table.integer('building_id').notNullable()
      table.float('longtitude').notNullable()
      table.float('latitude').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('building_locations')
  }
}

module.exports = BuildingLocationsSchema
