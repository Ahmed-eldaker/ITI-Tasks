const express = require('express');
const app = express();
const accRegister = require('./Routes/AccountRegister');
const auth = require('./Routes/Auth')
const morgan = require('morgan');
const { connect } = require('./db');
const { handleGlobalErrors } = require('./ErrorHandler');
const verifyToken = require('./MiddleWares/authJWT');

require('dotenv').config();

app.use(express.json())
app.use(morgan("dev"))
app.use('/', accRegister);
app.use('/signin', verifyToken, auth);
connect(process.env.URI)
app.use(handleGlobalErrors);

const PORT=process.env.PORT;

app.listen(PORT, () => {
    console.log("started Server");
})