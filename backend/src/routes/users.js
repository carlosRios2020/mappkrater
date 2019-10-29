const {Router} = require('express');
const router = Router();
const faker = require('faker');

const User = require('../models/user');

//find users
router.get('/api/users', async(req, res) => {
    const userfind = await User.find();
    res.json({userfind})
})

//create users random
router.get('/api/users/create', async(req, res) => {
        for(let i = 0; i<5; i++){
           await User.create({
                Name: faker.name.findName(),
                LastName: faker.name.lastName(),
                avatar: faker.image.avatar()
            })
        }
        res.json({message: '5 users created'})
    })
module.exports = router;