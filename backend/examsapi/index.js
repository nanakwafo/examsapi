const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

const auth =require('./middlewares/auth');
const errors =require('./middlewares/errors');


const unless = require('express-unless');

const app = express();
app.use(cors({
  origin: ['http://localhost:3000','https://d2hnzci46lnrfp.cloudfront.net']
}));

mongoose.Promise =global.Promise;
mongoose.connect(dbConfig.db,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connection')
},(error)=>{
    console.log('Database connection failed'+ error)
})


auth.authenticateToken.unless = unless;
app.use(
  auth.authenticateToken.unless({
    path: [
      { url: "/users/login", methods: ["POST"] },
      { url: "/users/register", methods: ["POST"] },
      { url: "/videos", methods: ["GET"] },
      
    ],
  })
);


app.use(express.json());

app.use("/users",require("./routes/users.routes"))
app.use("/videos",require("./routes/video.routes"))
app.use("/category",require("./routes/category.routes"))
app.use(errors.errorHandler)
app.listen(process.env.port|| 4000,function(){
    console.log("Ready top GO!")
})