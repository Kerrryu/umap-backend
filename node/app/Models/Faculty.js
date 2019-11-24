'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Faculty extends Model {
    office() {
        return this.hasOne('App/Models/Building', 'office_id', 'id')
    }
}

module.exports = Faculty
