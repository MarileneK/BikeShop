var express = require('express');
var router = express.Router();

let items = [
  {
    name: "Bike1",
    price: 550,
    picture: "bike-1"
  },
  {
    name: "Bike2",
    price: 750,
    picture: "bike-2"
  },
  {
    name: "Bike3",
    price: 1000,
    picture: "bike-3"
  },
  {
    name: "Bike4",
    price: 1000,
    picture: "bike-4"
  },
  {
    name: "Bike5",
    price: 1000,
    picture: "bike-5"
  },
  {
    name: "Bike6",
    price: 1000,
    picture: "bike-6"
  },
];

/* HOMEPAGE. */
router.get('/', function(req, res, next) {
  res.render('index', {items});
});

/* SHOP PAGE */
router.get('/shop', function(req, res, next) {
  console.log("log items dans route get", items)
  res.render('shop', {items});
});

module.exports = router;
