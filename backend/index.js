const express = require('express');
const userRoutes = require("./routes/user")
const cors = require('cors');
const app = express();

app.use(cors());


app.use(express.json());

app.use("/user", userRoutes);



PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Server is up and running");
})