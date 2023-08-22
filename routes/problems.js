const Express = require('express');
const router = Express.Router();
const controller = require('../controllers/paginated')
const Users = require('../dummyData');
const Middleware = require('../middleware/api_handler')

router.get('/problems' ,Middleware(Users), controller.final_paginated)

module.exports = router