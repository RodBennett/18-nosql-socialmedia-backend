//IMPORT USER MODEL
const { User, Thought } = require('../models');

// EXPORT FUNCTIONS TO USERROUTES
// GET ALL THOUGHTS
module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // GET SINGLE USER
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // CREATE NEW USER
    createUser(req, res) {
        User.create(req.body)
            .then((user) => console.log(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)
            })
    },
    // UPDATE OR EDIT A USER
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            //  THIS LINE MAY NEED TO BE DELETED
            // { $addToSet: { thoughts: req.body } }
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user found with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // DELETE A USER
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user found with that ID!!!" })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            ).then(() => res.json({ message: "User and thoughts have been deleted" }))
            .catch((err) => res.status(500).json(err));
    },
    // ADD FRIEND TO USER
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No such user exists" })
                    : res.json(user)
            )
            .catch((err) => res.json(500).json(err));
    },
    // DELETE FRIEND FROM USER
    deleteUser(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId },
            { $pull: { friend: { friendId: req.params.friendId } } },
            { runvalidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No such user exists!!!" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
}

