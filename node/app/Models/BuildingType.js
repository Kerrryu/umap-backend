'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BuildingType extends Model {
    buildings () {
        return this.hasMany('App/Models/Building', 'id', 'type')
    }
}

module.exports = BuildingType
