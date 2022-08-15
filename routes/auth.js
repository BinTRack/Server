/*
    path:api/login

*/


//Imports
const {Router}= require('express');
const {crearUsuario} = require('../controllers/auth');





const router = Router();



router.post('/new',crearUsuario);





module.export = router;