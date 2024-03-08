const express=require("express");
const router=require("./routers/productRouter");
const morgan=require("morgan");
const connectDB=require("./db/dbconnection")

const errorHandler=require("./midddleware/errorHandler");

require("dotenv").config("./.env");
const app=express();
app.use(express.json());

app.use(morgan('dev'));

app.use("/",router)

// bcrypt.hash("morsi123",7).then((val)=>{
//     console.log(val)
// })

const port=process.env.PORT;
console.log(port)

app.use(errorHandler);
connectDB();
app.listen(port,(req,res)=>{
    console.log("server 5000")
})





// const saltkey=bcrypt.genSaltSync(7);
// console.log(saltkey);

// bcrypt.compare("morsi123","$2a$07$.DglK3usg6mkgHbLu77V0.bVMG9simPoC4B6o6fO6NbY8EIpNPwea").then((val)=>{
//     console.log(val)
// })
