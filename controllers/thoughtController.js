const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getThoughts(req, res) {
        // use find() on your Thought model
        Thought.find()
            .then((thoughts) => { console.log(thoughts); res.json(thoughts)})
            .catch((err) => res.status(500).json({err, message: "error"}));
    },
    // get single thought by id
    getSingleThought(req, res) {
        // findOne() on Thought model
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            // .populate('reactions')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No post with that ID' })
                    : res.json(post)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a thought
    createThought(req, res) {
        // use create() on Thought model
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'Thought created, but found no user with that ID' })
                    : res.json('Created the thought 🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update thought
    updateThought(req, res) {
        // findOneAndUpdate() on Thought model
        User.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // delete thought
    deleteThought(req, res) {
        // findOneAndRemove() on Thought model
    },

    // add a reaction to a thought
    addReaction(req, res) {
        // findOneAndUpdate
        // use $addToSet - reference activity 23, controllers/postController - check out hows it's being used in the createPost
    },
    // remove reaction from a thought
    removeReaction(req, res) {
        // findOneAndUpdate
        // use $pull
    }
};

module.exports = thoughtController;