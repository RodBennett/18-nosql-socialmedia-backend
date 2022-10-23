// IMPORTS SCHEMA 
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
                'Please add a valid email address'
            ]
        },
        // ARRAY OF OBJECT IDS REFERENCING THE THOUGHT MODEL
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }
        ],
        // ARRAY OF OBJECT IDS SELF-REFERENCING USER MODEL
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            }
        ],
    },
    // FOR SENDING VIRTUALS TO JSON
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// CREATE A VIRTUAL CALLED FRIENDCOUNT 
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
})

// INITIALIZE THE USER MODEL
const User = model('user', userSchema)

module.exports = User;