const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeSignUp = require('./routes/routes')
const cors = require('cors')

dotenv.config({ path: "config.env" });

mongoose.connect(process.env.DB_ACCESS, {
      useNewUrlParser: true,
    })

mongoose.connect(process.env.DB_ACCESS, () => console.log("connected to mongodb"))

app.use(express.json());
app.use(cors());
//first arg: base path
app.use('/app', routeSignUp)
app.listen(4000, () => console.log("server is running"));