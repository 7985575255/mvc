const express = require('express');

const shopProductControler=require('../controlers/productControlers')

const router = express.Router();

router.get('/', shopProductControler.getAddShop);

module.exports = router;
