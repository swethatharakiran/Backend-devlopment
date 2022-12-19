const express=require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<form action="/product" method="POST"><label>product name</label><input type="text" name="title"><label>size</label><input type="text" name="size"><button type="submit">Add Product</button></form>');
    
});



app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    console.log('In another middleware2');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(4000);