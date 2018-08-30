// var nodemailer = require('nodemailer');

let form = document.getElementById("myForm");
// let transporter = nodemailer.createTransport('smtps://tpalzkilll%40gmail.com:Wendels1@smtp.gmail.com');

let getEmail = function() {
  let form = document.getElementById("myForm");
  let input = document.getElementById('textbox_id').value;
  var mailOptions = {
    from: '"Tom Palzkill" <tpalzkilll@gmail.com>', // sender address
    to: `${input}`, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
}

let animate = function(){
  $('box').addClass('animated bounceOutLeft');
}
