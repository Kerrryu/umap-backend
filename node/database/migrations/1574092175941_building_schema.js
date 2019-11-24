'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingSchema extends Schema {
  up () {
    this.create('buildings', (table) => {
      table.increments()
      table.string('name', 250).notNullable()
      table.float('longtitude').notNullable()
      table.float('latitude').notNullable()
      table.integer('contenttype_id')
      table.integer('subtype_id')
    })
  }

  down () {
    this.drop('buildings')
  }
}

module.exports = BuildingSchema
