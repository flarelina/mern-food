const express = require('express');
// Initialize app
const router = express.Router();
const jwt = require('jsonwebtoken');
// Load models
const bcrypt = require('bcryptjs');
const User = require('../models/User');
// const Announcement = require('../models/Announcement');
// const Order = require('../models/Orders');



// GET ALL users
router.get('/users', function(req, res){
    let users = User.find({}, function(err, users){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else {
            res.json(users);
        }
    })
})

// GET SINGLE user
router.get('/users/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
        res.json(user);
    });
});

//Login
router.post('/users/login', (req, res) => {
    
    User.findOne({
      username: req.body.username,
      password : req.body.password
    })
      .then(user => {
        if (user) {
         // if (bcrypt.compareSync(req.body.password, user.password)) {
             if((req.body.password== user.password) && req.body.username==user.username){
            // Passwords match
            // const payload = {
            //   username: req.body.username,
            //   password: req.body.password,
            // }
            // let token = jwt.sign(payload, process.env.SECRET_KEY, {
            //   expiresIn: 1440
            // })
            // res.send(token)
            res.send("Success");
          } else {
            // Passwords don't match
            res.json({ error: 'Invalid username or password' })
          }
        } else {
            
          res.json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

// ADD user
router.post('/users/add', function (req, res) {
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.address = req.body.address;
    user.birthday = req.body.birthday;
    user.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json(user)
        }
    });
});

// UPDATE user
router.post('/users/update/:id', function (req, res) {

    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
            user.username = req.body.username;
            user.fname = req.body.fname;
            user.lname = req.body.lname;
            user.email = req.body.email;
            user.phone = req.body.phone;
            user.address = req.body.address;
            user.birthday = req.body.birthday;
    
            user.save().then(user => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});

// DELETE user
router.post('/users/delete/:id', function (req, res) {
    let query = { _id: req.params.id }
    User.findByIdAndDelete(query, function(err){
        if(err){
            res.json({msg: "failed"})
            return;
        }
        else{
            res.json({msg: "success"})
        }
    });
});

module.exports = router;
