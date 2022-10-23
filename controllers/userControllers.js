//IMPORT USER MODEL
const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => console.log(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)

            })
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.UserId },
            //  THIS LINE MAY NEED TO BE DELETED
            { $addToSet: { thoughts: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user found with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user found with that ID!!!" })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            ).then(() => res.json({ message: "User and thoughts have been deleted" }))
            .catch((err) => res.status(500).json(err));
    },
}

