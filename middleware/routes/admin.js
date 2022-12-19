const express=require('express');
const router=express.Router();


router.get('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<form action="/admin/product" method="POST"><label>product name</label><input type="text" name="title"><label>size</label><input type="text" name="size"><button type="submit">Add Product</button></form>');
    
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;