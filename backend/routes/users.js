const router=require('express').Router();
let User = require('../models/user.model');

//first end point that handles http GET requests
router.route('/').get((req,res) => {
    User.find() //finds all users from MongoDB 
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));
});

//second end point that handles http post requests
router.route('/add').post((req,res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: '+err));  
});

module.exports=router; 