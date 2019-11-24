'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ContentType extends Model {
    buildings () {
        return this.hasMany('App/Models/Building', 'id', 'contenttype_id')
    }

    subtypes () {
        return this.hasMany('App/Models/Subtype', 'id', 'contenttype_id')
    }
}

module.exports = ContentType
