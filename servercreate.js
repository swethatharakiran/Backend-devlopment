const http= require("http");
const server=http.createServer((req,res)=>{
    res.end("swetha KH");
});

server.listen(4000);