var express = require('express');
var router = express.Router();
var path = require('path');



router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next();
});



/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log('Time1:', Date.now());
  // res.render('index', { title: 'Express' });
  res.sendFile(path.resolve('public/html/index.html'));
});

module.exports = router;
