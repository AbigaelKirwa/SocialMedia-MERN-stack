import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))

mongoose.set("strictQuery", false);
mongoose
.connect("mongodb://AbigaelKirwa:minneymouse@ac-ur2vnn2-shard-00-00.oe6fdej.mongodb.net:27017,ac-ur2vnn2-shard-00-01.oe6fdej.mongodb.net:27017,ac-ur2vnn2-shard-00-02.oe6fdej.mongodb.net:27017/SocialMedia?ssl=true&replicaSet=atlas-9ici5p-shard-0&authSource=admin&retryWrites=true&w=majority",
{useNewUrlParser:true, useUnifiedTopology:true}
)

.then(()=>app.listen(5000, ()=>console.log("Listening")))
