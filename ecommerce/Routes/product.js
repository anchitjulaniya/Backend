const express = require('express')
const router = express.Router();
const productController = require('../Controller/product')

router.get('/list', productController.listProducts)

router.post('/create', productController.listProducts)

module.exports = router;


