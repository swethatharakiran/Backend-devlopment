const http= require("http");
const server=http.createServer((req,res)=>{
    res.write('<html>');
    res.write('<head><title>My first page</title>');
    res.write('</head>');
    res.write('<body><h1>Hello Welcome to my Node Js project</h1>');
    res.write('</body>');
    res.write('</html>')
    if (req.url=='/home')
        res.write("Welcome Home");
    
    else if (req.url=='/about')
        res.write("Welcome to about us Page");
    
    else if (req.url=='/node')
        res.write("Welcome to my node js project");
    
  
    res.end();
});

server.listen(4000);