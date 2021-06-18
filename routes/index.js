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
    price: 800,
    picture: "bike-3"
  },
  {
    name: "Bike4",
    price: 1500,
    picture: "bike-4"
  },
  {
    name: "Bike5",
    price: 3000,
    picture: "bike-5"
  },
  {
    name: "Bike6",
    price: 1400,
    picture: "bike-6"
  },
];

let totalBasket = [
  {
    name: "Bike5",
    price: 1000,
    picture: "bike-5"
  },
  {
    name: "Bike6",
    price: 1000,
    picture: "bike-6"
  }
];

/* HOMEPAGE. */
router.get('/', function(req, res, next) {
  console.log("côté back 'items' dans route /", items)
  res.render('index', {items: items});
});

/* SHOP PAGE */
router.get('/shop', function(req, res, next) {
  console.log("côté back 'totalBasket' dans route /shop", totalBasket);
  res.render('shop', {totalBasket: totalBasket});
});

module.exports = router;
