const express= require('express');

const Auth= require('../controller/auth');

const router= express.Router();

router.post('/enter',Auth.crate);

module.exports=router;