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
const BuildingSubtype = use('App/Models/BuildingSubtype')

Route.on('/').render('welcome')

Route.get('/buildings', async () => {
    const buildings = await Building
        .query()
        .with('location')
        .with('buildingtype')
        .fetch();

    return buildings;
});

Route.get('/buildings/location/', async ({ request }) => {
    let building = null;
    if(request.get('id') != null) {
        const buildingID = request.get('id').id;
        building = await Building.find(buildingID);
    }

    return await building.location().fetch()
});

Route.get('/buildingtype', async () => {
    const building = await Building.find(1)
    return await building.buildingtype().fetch()
});

Route.get('/buildings/department', async ({ request }) => {
    const buildingType = await BuildingType.find(1)

    if(request.input('subtype')) {
        buildingType = buildingType.query().with('subtypes', (builder) => {
            builder.where('name', '=', request.input('subtype'))
        })
        .fetch()
    }

    return await buildingType.buildings().fetch()
});

Route.get('/buildings/poi', async () => {
    const buildingType = await BuildingType.find(2)
    return await buildingType.buildings().fetch()
});

Route.get('/buildings/subtypes', async ({ request }) => {
    const typeId = request.get('id').id
    const buildingType = await BuildingType.find(typeId)
    return await buildingType.subtypes().fetch()
}); 

Route.get('/search', async ({ request, response }) => {
    const query = Building.query()

    let keyword = request.input('keyword')

    if (keyword) {
        keyword = `%${decodeURIComponent(keyword)}%`
        query
            .with('buildingtype')
            .whereHas('buildingtype', (building) => {
                building.where('name', 'like', keyword)
            })
            .orWhere('name', 'like', keyword)
            .on('query', console.log)
    }

    const buildings = await query.fetch()

    return response.json({ results: buildings.toJSON() })
});