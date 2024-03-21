const express = require("express")
const dotenv = require('dotenv');
const userRoutes = require('./src/api/user/routes.js');
const blogRoutes = require("./src/api/blog/routes.js");
const cors = require('cors')

dotenv.config();

const app = express()

const connectToMongoDB = require("./src/database/config")
connectToMongoDB()

app.use(express.json());

app.use(cors('http://localhost:3000')); //This specifies that requests from this origin are allowed


app.use("/api/user", userRoutes);
app.use("/api/blog",blogRoutes);



app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})