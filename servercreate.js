const http= require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    if (req.url==='/'){
        fs.readFile("message.txt",'utf-8',(err,data)=>{
            if(err){
                console.error(err);
            }
                            
                res.setHeader('content-Type','text/html');
                console.log(data);
                console.log("from file");
                res.write('<html>');
                res.write('<head><title>Enter Message</title></head>');
                res.write(`<body>${data}<form action="/message" method="POST"><input type="text" name="mesaage"><button type="submit">Send</button></form>`);
                res.write('</body>');
                res.write('</html>');
                return res.end();
            
        });

    }
    
    if(req.url==='/message' && req.method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        });
        return req.on('end',()=>{
            const parsebody=Buffer.concat(body).toString();
            console.log(parsebody);
            const msg=parsebody.split('=')[1];
            fs.writeFile('message.txt',msg,err=>{
                res.statusCode=302;
                res.setHeader('Location','/'); 
                return res.end();
                
            });
             
        });       
    
}
});
server.listen(4000);