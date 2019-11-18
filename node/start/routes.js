'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Building = use('App/Models/Building')
const BuildingType = use('App/Models/BuildingType')

Route.on('/').render('welcome')

Route.get('/hello', async () => {
    return "Hello World"
})

Route.get('/buildings', async () => {
    const buildings = await Building
        .query()
        .with('location')
        .with('buildingtype')
        .fetch();

    return buildings;
});

Route.get('/buildinglocation', async () => {
    const building = await Building.find(1)
    return await building.location().fetch()
});

Route.get('/buildingtype', async () => {
    const building = await Building.find(1)
    return await building.buildingtype().fetch()
});

Route.get('/facultybuildings', async () => {
    const buildingType = await BuildingType.find(1)
    return await buildingType.buildings().fetch()
});

Route.get('/facultybuildingss', async () => {
    const buildings = await Building
        .query()
        .with('buildingtype', (builder) => {
            builder.where('id', 1)
        })
        .fetch();
});