'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Building extends Model {
    static get table () {
        return 'buildings'
    }

    location () {
        return this.hasOne('App/Models/BuildingLocation')
    }

    buildingtype () {
        return this.hasOne('App/Models/BuildingType', 'type', 'id')
    }
}

module.exports = Building
