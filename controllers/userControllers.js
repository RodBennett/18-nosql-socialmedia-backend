//IMPORT USER MODEL
const { User } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then((user) => console.log(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err)

        })
    }
}

