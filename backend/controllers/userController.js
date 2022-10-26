const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jwt-simple")
const userModel = require("../models/userModel")

const registerUser = async (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const { name, email, password } = req.body
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash
            })
            user.save()
                .then((data) => {
                    res.status(200).json({
                        succes: "true",
                        user: data
                    })
                })
                .catch((err => res.status(400).json({ err })))

        })

        .catch((err => res.status(400).json({ err })))
    // try {
    //     const response = await user.save((console.log("data1utilisateur enregistré"))).then(() => res.status(200).json({
    //         message: "Post saved successfully !"
    //     })).catch(err => res.send(err))
    // } catch (error) {
    //     res.status(500).json({ error: "erreur" })
    // }

}


const loginUser = (req, res) => {
    console.log(req.body)
    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
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

        .catch((error) => res.status(500).json({ error }))
}

// const getMe = async (req, res) => {
//     console.log(req.params.id);
//     const selectUser = await User.findOne({ _id: req.params.id });
//     if (!selectUser) {
//         return res.status(404).send('user does not exist')
//     } else {
//         return res.status(200).json(selectUser)
//     }

// }

// const getAll = async (req, res) => {
//     console.log(req.params.id);
//     const selectUser = await User.find();
//     if (!selectUser) {
//         return res.status(404).send('user does not exist')
//     } else {
//         return res.status(200).json(selectUser)
//     }

// }

const getAll = (req, res) => {
    const userId = req.params.id;
    User.find({_id : {$ne : userId}})
    .then((data)=>{
        res.status(200).send({
            user:data
        })
    }).catch((error)=>{
        res.status(400).json(error)
    })
}



const handleSignIn = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                res.status(401).json({ message: "email ou mot de pass incorrect" })
            } else {
                const payload = {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    expire: 24 * 60 * 60 * 1000
                }
                const token = jwt.encode(payload, '|MK28051996|')
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            res.status(401).json({ message: "email ou mot de pass incorrect" })
                        } else {
                            delete user.password
                            res.status(200).json({
                                userId: user._id,
                                token: `Bearer ${token} `,
                                name: user.name
                            })
                        }
                    })

                    .catch(err => res.status(400).json({ err }))
            }
        })
}

module.exports = {
    registerUser,
    loginUser,
    getAll,
    handleSignIn
}