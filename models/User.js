const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
        },
        email: {
        },
        thoughts: [
            {

            },
        ],
        friends: [
            {
    
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual for friendCount - reference activities 21 and 23

const User = model('User', userSchema);

module.exports = User;