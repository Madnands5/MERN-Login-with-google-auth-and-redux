const router= require("express").Router();

const authcontroller=require("../controllers/auth");

router.route('/register').post(authcontroller.register);
router.route('/login').post(authcontroller.login);
router.route('/googleauth').post(authcontroller.googleauth);


module.exports=router;