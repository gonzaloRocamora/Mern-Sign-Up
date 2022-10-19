const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const SignUpSchema= require('../models/SignUpSchema.js')
//const SignInSchema = require('../models/SignInSchema')

router.post('/signup', (req, res) => {
    const actualUser = new SignUpSchema({
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
 /* 
router.post('/singin', (req, res)) => { 
    const signedUser = new SignInSchema({
        
    })
}
 
 */
module.exports = router;


