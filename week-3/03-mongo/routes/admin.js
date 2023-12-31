const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db")
const app = Router();
// Admin Routes
app.post('/signup', async (req, res) => {
    // Implement admin signup logic
    await Admin.create({
        username: req.body.username,
        password: req.body.password
    });
    res.json({
        msg: "Admin created successfully"
    })
});

app.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    });
    res.json({
        msg: "Course Created successfully", courseId: newCourse._id
    })
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then(courses =>{
        res.json(courses);
    })
});

module.exports = app;