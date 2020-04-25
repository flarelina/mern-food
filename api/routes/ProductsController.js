const express = require('express');
// Initialize app
const router = express.Router();
const jwt = require('jsonwebtoken');
// Load models
const bcrypt = require('bcryptjs');
const Product = require('../models/Products');


// GET Product List
router.get('/products', function(req, res){
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

// GET SINGLE product
router.get('/products/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
        res.json(user);
    });
});

// ADD Product  Module
router.post('/product/addProduct', function (req, res) {
    let Product = new Product();
    Product.name = req.body.name;
    Product.quantity = req.body.quantity;
    Product.dateCreated = req.body.dateCreated;
    Product.itemPhoto = req.body.itemPhoto;
    Product.itemCode = req.body.itemCode;
    Product.itemDescription = req.body.itemDescription;
    Product.price = req.body.price;
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
            Product.dateCreated = req.body.dateCreated;
            Product.itemPhoto = req.body.itemPhoto;
            Product.itemCode = req.body.itemCode;
            Product.itemDescription = req.body.itemDescription;
            Product.price = req.body.price;
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

module.exports = router;