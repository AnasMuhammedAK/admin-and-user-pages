var express = require("express");
var router = express.Router();
const productHelpers = require("../helpers/product-helpers");
const adminHelpers = require("../helpers/admin-helpers");
const userHelpers = require("../helpers/user-helpers");
const async = require("hbs/lib/async");
const { status, redirect } = require("express/lib/response");
const objectId = require("mongodb").ObjectId;

// let veryfyAdminLogin=(req,res,next)=>{
//   if(req.session.adminLoggedIn){
//     next()
//   }else{
//     res.redirect('/admin-ligin')
//   }
// }

/* GET users listing. */
var Admin;
router.get("/", (req, res) => {
  let admin = req.session.admin;
  Admin = admin;
  if (req.session.adminLoggedIn) {
    res.render("admin/admin-home", { admin: true, Admin });
  } else {
    res.render("admin/admin-loging",{"loggValue":req.session.adminLoggErr})
    req.session.adminLoggErr=false
  }
});

router.post("/login", (req, res) => {
  adminHelpers.doAdminLogin(req.body).then((result) => {
    console.log(result.admin);
    if (result.status) {
      req.session.admin = result.admin;
      req.session.adminLoggedIn = true;

      res.render("admin/admin-home", { admin: true,Admin});
    } else {
      req.session.adminLoggErr = true;
      console.log("working else condtion");
      res.redirect("/admin");
    }
  });
});

//view user router

router.get("/view-users", (req, res) => {
  adminHelpers.getUserDetails().then((userDetails) => {
    res.render("admin/view-users", { admin: true, userDetails });
  });
});
//delet router

router.get("/delete-user/:id", (req, res) => {
  let userId = req.params.id;
  console.log(userId);
  adminHelpers.deleteUser(userId).then((respons) => {
    res.redirect("/admin/view-users");
  });
});

//edit user
router.get("/edit-user/:id", async (req, res) => {
  let user = await adminHelpers.getOneUserDetails(req.params.id);
  console.log(user);
  res.render("admin/edit-user", { user, admin: true });
});
router.post("/edit-user/:id", (req, res) => {
  adminHelpers.updateUser(req.params.id, req.body).then((result) => {
    console.log(result);
    res.redirect("/admin/view-users");
  });
});

//home page
router.get("/home", (req, res) => {
  res.render("admin/admin-home", { admin: true });
});

router.get("/logout-admin", (req, res) => {
   req.session.destroy();
  console.log("call reached")
  res.redirect("/admin");
});

module.exports = router;
