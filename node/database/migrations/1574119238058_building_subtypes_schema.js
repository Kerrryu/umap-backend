'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingSubtypesSchema extends Schema {
  up () {
    this.create('building_subtypes', (table) => {
      table.increments()
      table.integer('buildingtype_id').notNullable()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('building_subtypes')
  }
}

module.exports = BuildingSubtypesSchema
