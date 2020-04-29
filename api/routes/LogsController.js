const express = require('express');
// Initialize app
const router = express.Router();
const jwt = require('jsonwebtoken');
// Load models
const bcrypt = require('bcryptjs');
const Logs = require('../models/Logs');




// GET Logs List
router.get('/logs', function(req, res){
    let Logs = Logs.find({}, function(err, users){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else {
            res.json(users);
        }
    })
})

// GET SINGLE Logs
router.get('/logs/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
        res.json(user);
    });
});


// ADD Announcement  Module
router.post('/logs/addLogs', function (req, res) {
    let Logs = new Logs();
    Logs.transactionMessage = req.body.transactionMessage;
    Logs.dateCreated = req.body.dateCreated;
    Logs.user = req.body.user;
    Logs.remarks = req.body.remarks;
    Logs.status = req.body.status;
    Logs.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json(user)
        }
    });
});


// UPDATE Logs Module
router.post('/logs/updateLogs/:id', function (req, res) {
    let Logs = new Logs();
    Logs.findById(req.params.id, function(err, Logs) {
        if (!Logs)
            res.status(404).send("data is not found");
        else {
            Logs.transactionMessage = req.body.transactionMessage;
            Logs.dateCreated = req.body.dateCreated;
            Logs.user = req.body.user;
            Logs.remarks = req.body.remarks;
            Logs.status = req.body.status;
            Logs.save().then(Logs => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});

// DELETE Logs Module
router.post('/logs/delete/:id', function (req, res) {
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