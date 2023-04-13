const path = require('path');
const getProduct=require('../controlers/productControlers')

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getProduct.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', getProduct.postAddProduct);

module.exports = router;

