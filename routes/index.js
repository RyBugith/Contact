var express = require('express');
var router = express.Router();

var sendmail = require('sendmail')();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'}); // success message
});



// post function
router.post('/', function(req, res){
  console.log(req.body); // for debugging


   sendmail({
     from: 'no-reply@yourdomain.com',
     to: 'ryan.ward.hermansen@aggiemail.usu.edu',
     subject: req.body.subject, // from hbs
     html: 'Mail of test sendmail'
     }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
   });


  res.render('index',{title: "Success Message"});

});


module.exports = router;

/*
email validation
localhost


*/
