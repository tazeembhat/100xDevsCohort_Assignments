const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course, Admin} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET_USER} = require("../config");
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    }).then(()=>{
        res.json({
            msg: "user created successfully"
        })
    })
});

router.post('/signin', async (req, res) => {
    // Implement user signin logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username: username,
        password: password
    });

    if(user){
        const token = jwt.sign({username:username}, JWT_SECRET_USER);
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

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(courses => {
        res.json({
            courses
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;

    User.updateOne({
        username: req.username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    }).then(()=>{
        res.json({
            msg: "Purchase Complete"
        })
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username
    const user = await User.findOne({username: username});
    const courses = await Course.find({
        _id : {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        "Purchased Courses": courses
    })
});

module.exports = router;