const express = require("express");
const { User, Todo } = require("../db/db");

const userMiddleware = require("../middlewares/user");

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const router = express.Router();

router.post("/signup", async (req, res)=>{
   
    try {
        const username = req.body.username;
        const password = req.body.password;
    
        // Ensure both fields are provided
        if (!username || !password) {
          return res.status(400).json({ message: "Username and password are required" });
        }
    
        // Create the user
        await User.create({
          username: username,
          password: password
        });
    
        // Send success response
        res.status(201).json({
          message: "User created successfully"
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
    
})


router.post('/signin' , async (req, res)=>{
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.find({
            username,
            password
        })

        if(user){
            const token = jwt.sign({
                username
            }, JWT_SECRET);
            res.json({
                token
            })
        }else{
            res.status(411).json({
                message: "Incorrect email and password"
            })
        }
    } catch (error) {
        console.log(error)
    }
});

router.post('/mytodos/create', userMiddleware, async(req, res)=>{
    const loggedinuser = await User.findOne({ username: req.username });

    Todo.create({
        user: loggedinuser._id,
        title: req.body.title,
        description: req.body.description,
        status: "pending"

    });

    res.json({
        msg: "todo added successfully"
    })


})

router.get('/mytodos', userMiddleware, async(req, res) => {
    //  const loggedinuser = await User.findOne({ username: req.username });
   
    // const todos = await Todo.find({
    //     user: loggedinuser._id
    // });

    // res.json(todos)


    try {
        const loggedinuser = await User.findOne({ username: req.username });
        if (!loggedinuser) {
            return res.status(404).json({ msg: "User not found" });
        }

        const todos = await Todo.find({ user: loggedinuser._id });
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }

})



module.exports = router;