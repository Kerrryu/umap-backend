'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BuildingLocation extends Model {
    building () {
        return this.belongsTo('App/Models/Building', 'building_id', 'id');
    }
}

module.exports = BuildingLocation
