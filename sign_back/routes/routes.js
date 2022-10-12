const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const signUpSchema= require('../models/SignUpSchema.js')


router.post('/signup', (req, res) => {
    const actualUser = new signUpSchema({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email:    req.body.email,
        password: req.body.password
    })
    actualUser.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
        console.log(err);
        
    })
})

module.exports = router;
