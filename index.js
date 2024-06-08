// import json-server
const jsonServer = require('json-server')
// create server for media player app
const DHServer = jsonServer.create()
// create middleware used by JSON server
const middleware = jsonServer.defaults()
//  set up route for json file in server
const route = jsonServer.router('restaurants.json')
// set up port for running server app
const PORT = 3000 || process.env.PORT

DHServer.use(middleware)
DHServer.use(route)
DHServer.listen(PORT,()=>{
    console.log(`Media Player Server Started at port ${PORT} and waiting for client request`);
})