var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toms APP FOOLS' });
});


module.exports = router;
