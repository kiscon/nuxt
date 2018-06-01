var express = require('express')
var router = express.Router()
var request = require('request')
var config = require('../../config/config')


//查询商品详情
router.all('/', function (req, res, next) {
  res.json([
    {"id":1,"title":"第一个商品","price":1.99,"rating":1.5,"desc":"这是第一个商品","categories":["电子产品","硬件设备"]},
    {"id":1,"title":"第二个商品","price":2.99,"rating":2.5,"desc":"这是第二个商品","categories":["图书"]},
    {"id":3,"title":"第三个商品","price":3.99,"rating":3.5,"desc":"这是第三个商品","categories":["农产品"]},
  ]);
});


module.exports = router
