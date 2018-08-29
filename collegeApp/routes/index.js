var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'USER',
    pass: 'PASSWORD'
  }
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toms APP FOOLS' });
});

router.post('/', function(req, res, next) {
  let address = req.body;
  var mailOptions = {
    from: '"Tom Palzkill" <tpalzkilll@gmail.com>', // sender address
    to: `${address.address}, ${address.address}`, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};
return transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.redirect('/')
  })
  // .then(function(){

  // })
  // .catch(function(error){
  //   console.log(error);
  // })
})


module.exports = router;
