const router=require("express").Router();
const{creatUser,getUser}=require("../controller/productController");

router.route("/signup").post(creatUser);
router.route("/signin").post(getUser);


module.exports=router 