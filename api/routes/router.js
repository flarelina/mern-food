const express = require('express');
// Initialize app
const router = express.Router();
const jwt = require('jsonwebtoken');
// Load models
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Announcement = require('../models/Announcement');
const Product = require('../models/Products');
const Order = require('../models/Orders');



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

// ADD Announcement  Module
router.post('/announcement/addAnnouncement', function (req, res) {
    let Announcement = new Announcement();
    Announcement.date_created = req.body.date_created;
    Announcement.message = req.body.message;
    Announcement.postedby = req.body.postedby;
    Announcement.date_modified = req.body.date_modified;
    Announcement.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json(user)
        }
    });
});


// UPDATE Announcement Module
router.post('/announcement/updateAnnouncement/:id', function (req, res) {

    Announcement.findById(req.params.id, function(err, Announcement) {
        if (!Announcement)
            res.status(404).send("data is not found");
        else {
            Announcement.date_created = req.body.date_created;
            Announcement.message = req.body.message;
            Announcement.postedby = req.body.postedby;
            Announcement.date_modified = req.body.date_modified;
            Announcement.save().then(Announcement => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});

// DELETE Announcement Module
router.post('/announcement/delete/:id', function (req, res) {
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

// ADD Product  Module
router.post('/product/addProduct', function (req, res) {
    let Product = new Product();
    Product.name = req.body.name;
    Product.quantity = req.body.quantity;
    Product.date_created = req.body.date_created;
    Product.Item_Photo = req.body.Item_Photo;
    Product.Item_Code = req.body.Item_Code;
    Product.Item_Description = req.body.Item_Description;
    Product.Price = req.body.Price;
    Product.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json(user)
        }
    });
});


// UPDATE Product Module
router.post('/product/updateProduct/:id', function (req, res) {

    Product.findById(req.params.id, function(err, Product) {
        if (!Product)
            res.status(404).send("data is not found");
        else {
            Product.name = req.body.name;
            Product.quantity = req.body.quantity;
            Product.date_created = req.body.date_created;
            Product.Item_Photo = req.body.Item_Photo;
            Product.Item_Code = req.body.Item_Code;
            Product.Item_Description = req.body.Item_Description;
            Product.Price = req.body.Price;
    
            Product.save().then(Product => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});

// DELETE Product Module
router.post('/product/deleteProduct/:id', function (req, res) {
    let query = { _id: req.params.id }
    Product.findByIdAndDelete(query, function(err){
        if(err){
            res.json({msg: "failed"})
            return;
        }
        else{
            res.json({msg: "success"})
        }
    });
});


// ADD Order Module
router.post('order/addOrder', function (req, res) {
    let Order = new Order();
    Order.name = req.body.name;
    Order.quantity = req.body.quantity;
    Order.OrderBy = req.body.OrderBy;
    Order.Total_Price = req.body.Total_Price;
    Order.Date_Order = req.body.Date_Order;
    Order.Date_of_delivery = req.body.Date_of_delivery;
    Order.Status = req.body.Status;
    Order.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json(user)
        }
    });
});


// UPDATE Product Module
router.post('/order/updateOrder/:id', function (req, res) {

    Order.findById(req.params.id, function(err, Order) {
        if (!Order)
            res.status(404).send("data is not found");
        else {
            let Order = new Order();
            Order.name = req.body.name;
            Order.quantity = req.body.quantity;
            Order.OrderBy = req.body.OrderBy;
            Order.Total_Price = req.body.Total_Price;
            Order.Date_Order = req.body.Date_Order;
            Order.Date_of_delivery = req.body.Date_of_delivery;
            Order.Status = req.body.Status;
    
            Order.save().then(Order => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});

// DELETE Product Module
router.post('/order/deleteOrder/:id', function (req, res) {
    let query = { _id: req.params.id }
    Product.findByIdAndDelete(query, function(err){
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
