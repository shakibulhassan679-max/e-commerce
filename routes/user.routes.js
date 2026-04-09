const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const {signup, login} = require('../controllers/auth.controller');
const { auth, isAdmin } = require('../middleware/auth.middleware');
 
router.post("/signup", signup);
router.post("/login", login); 


router.get("/users", auth, isAdmin, async (req, res) => {
   const users = await User.find();
   res.json(users);
});


 router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.post('/users', async (req,res) => {
    try { 
        const {name, body, weight} = req.body;
        const newUser = new User({name, age, weight});
        await newUser.save();

        return res.status(200).json({
            success: true,
            user : newUser   
        });    
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, weight } = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(
            id,
            { name, age, weight },
            { new: true }
        );

        if (!updateUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user: updateUser
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// DELETE user
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleteUser = await User.findByIdAndDelete(id);

        if (!deleteUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user: deleteUser
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});



module.exports = router;