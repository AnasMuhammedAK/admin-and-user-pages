var express = require('express');
const { response } = require('../app');
const userHelpers = require('../helpers/user-helpers');
var router = express.Router();

let veryfyLogin=(req,res,next)=>{
  if(req.session.loggedIn){
    next()
  }else{
    res.redirect('/')
  }
}
/* GET users listing. */
router.get('/', function(req, res, next) {
   if(req.session.loggedIn){
     res.redirect('/user')
   }else{

  let logValue=req.session.loggErr;

    res.render('login/login-form',{logValue})
    req.session.loggErr=false

   }
   
  
  
});
router.post("/login", function (req, res) {
    console.log(req.body);
    userHelpers.doLogin(req.body).then((response)=>{
      if(response.status){
        req.session.loggedIn=true
        req.session.user=response.user
        res.redirect('/user')
      }else{
        req.session.loggErr=true
        res.redirect('/')
        
      }
    })
    //res.redirect('/user')
  });


//sign up form 

router.get("/register", function (req, res) {
    res.render("signup/signup-form");
  });
  router.post("/signup", function (req, res) {
    console.log(req.body);
    userHelpers.doSignup(req.body).then((response)=>{
      console.log(response)
       req.session.loggedIn=true
      req.session.user=req.body
      
      res.redirect('/user')
    })

    
  });

  //logout
  router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/user')
  })

  //cart router
  router.get('/cart',veryfyLogin,(req,res)=>{

    res.render('user/cart')
  })



  

module.exports = router;
