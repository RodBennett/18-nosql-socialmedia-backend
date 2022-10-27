// IMPORT THOUGHT MODEL
const { User, Thought } = require('../models');

// EXPORTED FUNCTIONS
// GETTING ALL THOUGHTS
module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // GET ONE THOUGHT BY REQ.PARAMS
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('thoughtText')
            .select('reactions')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No such thought exists!" })
                    : res.json(thought)
            )
    },
    // CREATE A NEW THOUGHT
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => console.log(thought))
            .catch((err) => {
                console.log(err, "This thought is an error");
                return res.status(500).json(err)
            })
    },
    // UPDATE OR EDIT A THOUGHT
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No such thought was found" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // DELETE A THOUGHT
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "How can you delete a thought that doesn't exist?" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },
    // CREATE A REACTION
    // createReaction(req, res) {
    //     Thought.create([
    //         {
    //             $match
    //         }
    //     ])
    // }
}