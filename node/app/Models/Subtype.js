'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subtype extends Model {
    buildingtype() {
        return this.hasOne('App/Models/ContentType', 'contenttype_id', 'id')
    }
}

module.exports = Subtype
