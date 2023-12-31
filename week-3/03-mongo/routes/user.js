const { Router } = require("express");
const app = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");

// User Routes
app.post('/signup', async (req, res) => {
    // Implement user signup logic
    await User.create({
        username: req.body.username,
        password: req.body.password
    });
    res.json({
        msg: "User created successfully"
    })
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(courses => {
        res.json(courses);
    })
});

app.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    try{
        await User.updateOne({
            username: username
        },{
            "$push": {
                purchasedCourses: courseId
            }
        });
        res.json({
            msg: "Purchase Complete"
        })
    }
    catch (err){
        console.log(err);
    }

});

app.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({username: username});
   try{
       const courses = await Course.find({
           _id: {
               "$in": user.purchasedCourses
           }
       })
       res.json({
           "Purchased courses": courses
       });
   }
    catch (err){
       console.log(err);
    }
});

module.exports = app;