const express = require('express');
// Initialize app
const router = express.Router();
const jwt = require('jsonwebtoken');
// Load models
const bcrypt = require('bcryptjs');
const Announcement = require('../models/Announcement');




// GET Announcement List
router.get('/announcement', function(req, res){
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

// GET SINGLE announcement
router.get('/announcement/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
        res.json(user);
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


module.exports = router;