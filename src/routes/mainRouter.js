const express = require('express');
const router = express.Router(); 
const accessAdmin= require('../middlewares/accessAdmin')
const {index,about,contact,music,admin,login,noEntry} =require('../controllers/indexController.js')

router
    .get('/', index)
    .get('/contact', contact)
    .get('/about', about)
    .get('/music', music)
    .get('/admin',accessAdmin, admin)
    .get('/login', login)
    .get('/no-entry', noEntry)




module.exports= router; 