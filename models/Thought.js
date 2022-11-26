const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const { dateFormat } = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return dateFormat(date);
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema] // reference activity 17 and 18
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// virtual for reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;