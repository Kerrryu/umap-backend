'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacultySchema extends Schema {
  up () {
    this.create('faculties', (table) => {
      table.increments()
      table.string('name', 250).notNullable()
      table.integer('office_id')
      table.string('officehours')
    })
  }

  down () {
    this.drop('faculties')
  }
}

module.exports = FacultySchema
