const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('In shop middleware');
    res.send('<h1>Hello from Express-shop route</h1>');
});

module.exports=router;