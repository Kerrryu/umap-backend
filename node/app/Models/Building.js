'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const BuildingType = use('App/Models/ContentType')
const BuildingSubtype = use('App/Models/Subtype')

class Building extends Model {
    static get table () {
        return 'buildings'
    }

    contenttype() {
        return this.hasOne('App/Models/ContentType', 'contenttype_id', 'id')
    }
    
    subtype() {
        return this.hasOne('App/Models/Subtype', 'subtype_id', 'id')
    }
}

module.exports = Building
