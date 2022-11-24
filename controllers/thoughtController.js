const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getThoughts(req, res){
        // use find() on your Thought model
    },
    // get single thought by id
    getSingleThought(req, res) {
        // findOne() on Thought model
    },
    // create a thought
    createThought(req, res) {
        // use create() on Thought model
    },
    // update thought
    updateThought(req, res) {
        // findOneAndUpdate() on Thought model
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