var express = require('express');
var router = express.Router();

let items = [
  {
    name: "Bike1",
    price: 550,
    picture: "bike-1.jpg"
  },
  {
    name: "Bike2",
    price: 750,
    picture: "bike-2.jpg"
  },
  {
    name: "Bike3",
    price: 1000,
    picture: "bike-3.jpg"
  },
  {
    name: "Bike4",
    price: 1000,
    picture: "bike-4.jpg"
  },
  {
    name: "Bike5",
    price: 1000,
    picture: "bike-5.jpg"
  },
  {
    name: "Bike6",
    price: 1000,
    picture: "bike-5.jpg"
  },
];

/* HOMEPAGE. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* SHOP PAGE */
router.get('/shop', function(req, res, next) {
  res.render('shop', items);
});

module.exports = router;
