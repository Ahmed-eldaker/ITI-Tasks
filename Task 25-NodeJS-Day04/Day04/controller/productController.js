const User = require("../models/moduler");
const bcrypt = require("bcryptjs");

async function getUser(req, res, next) {
  
  try {
    let { userName, password } = req.body;
  await User.findOne({ userName });
    res.json({
      status: "success",
      massage: "done",
    });
  } catch (error) {
    next(error);
  }
//   res.send(`User Name Is ${userName}`);
  console.log(" we get");
}

async function creatUser(req, res, next) { 
    try {
      let { userName, password } = req.body;
    
      const hashpassword = await bcrypt.hash(password, 7);
    //   console.log(hashpassword);
    await User.create({ userName, password:hashpassword }); 
    res.json({
      status: "success",
      massage: "done",
    });
  } catch (error) {
    next(error);
  }
  console.log("we creat");
}

module.exports = {
  getUser,
  creatUser,
};

