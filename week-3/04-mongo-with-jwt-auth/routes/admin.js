const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db");
const {JWT_SECRET_ADMIN} = require("../config");
const jwt = require("jsonwebtoken");
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.create({
        username: username,
        password: password
    }).then(()=>{
        res.json({
            msg: "Admin Created Successfully"
        })
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.findOne({
        username: username,
        password: password
    });
    console.log(user);
    if(user){
        const token = jwt.sign({username:username}, JWT_SECRET_ADMIN);
        res.json({
            token
        })
    }
    else {
        res.status(411).json({
            msg: "user not found"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    }).then(()=>{
        res.json({
        msg: "Course added Successfully"
    })
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then(courses=>{
        res.json({
            courses
        })
    })
});

module.exports = router;