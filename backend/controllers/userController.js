const User = require("../models/userModel")

const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    const user = new User({
        name,
        email,
        password,
    })
    try {
        const response = await user.save().then(() => res.status(200).json({
            message: "Post saved successfully !"
        })).catch(err => res.send(err))
    } catch (error) {
        res.status(500).json({ error: "erreur" })
    }
}


const loginUser = (req, res) => {
    console.log(req.body)
    User.findOne({ email: email })
    .then((user)=>{
        if(!user) {
            res.status(200).json({
                success: false,
                message: " Identifiant | mot de passe incorrects"
            })
        } else {
            res.status(200).json(({
                success: true,
                message: "Bienvenue"
            }))
        }
    })
    
    .catch((error) => res.status(500).json({error}))
}

const getMe = async (req, res) => {
    console.log(req.params.id);
    const selectUser = await User.findOne({ _id: req.params.id });
    if (!selectUser) {
        return res.status(404).send('user does not exist')
    } else {
        return res.status(200).json(selectUser)
    }

}

const getAll = async (req, res) => {
    console.log(req.params.id);
    const selectUser = await User.find();
    if (!selectUser) {
        return res.status(404).send('user does not exist')
    } else {
        return res.status(200).json(selectUser)
    }

}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    getAll,
}