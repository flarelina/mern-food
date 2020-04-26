const express = require('express');
// Initialize app
const router = express.Router();
const jwt = require('jsonwebtoken');
// Load models
const bcrypt = require('bcryptjs');
const Order = require('../models/Orders');

// GET Order List
router.get('/orders', function(req, res){
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

// GET SINGLE order
router.get('/orders/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
        res.json(user);
    });
});

// ADD Order Module
router.post('orders/addOrder', function (req, res) {
    let Order = new Order();
    Order.name = req.body.name;
    Order.quantity = req.body.quantity;
    Order.OrderBy = req.body.OrderBy;
    Order.totalPrice = req.body.totalPrice;
    Order.dateOrder = req.body.dateOrder;
    Order.dateOfDelivery = req.body.dateOfDelivery;
    Order.status = req.body.status;
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


// UPDATE Order Module
router.post('/orders/updateOrder/:id', function (req, res) {

    Order.findById(req.params.id, function(err, Order) {
        if (!Order)
            res.status(404).send("data is not found");
        else {
            let Order = new Order();
            Order.name = req.body.name;
            Order.quantity = req.body.quantity;
            Order.OrderBy = req.body.OrderBy;
            Order.totalPrice = req.body.totalPrice;
            Order.dateOrder = req.body.dateOrder;
            Order.dateOfDelivery = req.body.dateOfDelivery;
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

// DELETE Order Module
router.post('/orders/deleteOrder/:id', function (req, res) {
    let query = { _id: req.params.id }
    Order.findByIdAndDelete(query, function(err){
        if(err){
            res.json({msg: "failed"})
            return;
        }
        else{
            res.json({msg: "success"})
        }
    });
});



// UPDATE Order Module
router.post('/orders/updateOrderStatus/:id', function (req, res) {
    Order.findById(req.params.id, function(err, Order) {
        if (!Order)
            res.status(404).send("data is not found");
        else {
            let Order = new Order();
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

module.exports = router;