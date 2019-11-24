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
const ContentType = use('App/Models/ContentType')
const Subtype = use('App/Models/Subtype')

Route.on('/').render('welcome')

Route.get('/buildings', async () => {
    const buildings = await Building
        .query()
        .with('contenttype')
        .fetch();

    return buildings;
});

Route.get('/buildings/location/', async ({ request }) => {
    let building = null;
    if(request.get('id') != null) {
        const buildingID = request.input('id');
        building = await Building.find(buildingID);
    }

    return await building.location().fetch()
});

Route.get('/buildingtype', async ({ request }) => {
    const building = await Building.find(request.input('id'))
    return await building.contenttype().fetch()
});

Route.get('/buildings/department', async ({ request }) => {
    const contentType = await ContentType.find(1)

    if(request.input('subtype')) {
        contentType = contentType.query().with('subtypes', (builder) => {
            builder.where('name', '=', request.input('subtype'))
        })
        .fetch()
    }

    return await buildingType.buildings().fetch()
});

Route.get('/buildings/poi', async () => {
    const contentType = await ContentType.find(2)
    return await contentType.buildings().fetch()
});

Route.get('/buildings/subtypes', async ({ request }) => {
    const typeId = request.get('id').id
    const contentType = await ContentType.find(typeId)
    return await contentType.subtypes().fetch()
}); 

Route.get('/search', async ({ request, response }) => {
    const query = Building.query()

    let keyword = request.input('keyword')

    if (keyword) {
        keyword = `%${decodeURIComponent(keyword)}%`
        query
            .with('contenttype')
            .with('subtype')
            .whereHas('subtype', (building) => {
                building.where('name', 'like', keyword)
            })
            .orWhere('name', 'like', keyword)
            .on('query', console.log)
    }

    const buildings = await query.fetch()

    return response.json({ results: buildings.toJSON() })
});