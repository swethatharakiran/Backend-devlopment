const http= require("http");

const routes=require('./route.js');

const server=http.createServer(routes);
//console.log(routes.t);

server.listen(4000);