const express = require('express'); 
const UserRouter = require('./routers/UserRouter');
const app =express();
const cors = require('cors');
const port =5000;
//middleware
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json());
app.use("/user", UserRouter )





app.listen(port, (err) =>{
    if(err){
        console.log("failed"+err);
    }
    else{
        console.log("Server started");
    }
})