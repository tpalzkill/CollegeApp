var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

//Different email services will have different restrictions regarding smtp, for a gmail account https://nodemailer.com/usage/using-gmail/
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    //Email creds here
    user: 'USER',
    pass: 'PASS'
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Oracle'
  });
});

/* POST email */
router.post('/', function(req, res, next) {
  let address = req.body;
  var mailOptions = {
    from: '"Tom Palzkill" <tpalzkilll@gmail.com>', // sender address
    to: `${address.address}`, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
  };

  return transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.redirect('/')
  })

})


module.exports = router;
