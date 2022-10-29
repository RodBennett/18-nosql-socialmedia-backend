// IMPORT SCHEMA
const { Schema, model } = require('mongoose');

// SCHEMA FOR REACTIONS TO BE EMBEDDED IN THOUGHTSCHEMA
const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        }
    })

// SCHEMA FOR THOUGHT MODEL
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        // CURRENT TIMESTAMP AND GETTER METHOD FOR QUERIES
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
        username:
        {
            type: String,
            required: true,
        },

        reactions: [reactionSchema],
    },
    // ALLOWS VIRTUALS TO BE CONVERTED TO JSON
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

// FORMAT DATE FOR READABLE DATE STAMP
function formatDate(createdAt) {
    return createdAt.toLocaleString();
};

// VIRTUAL FIELD FOR REACTIONCOUNT TO RETRIEVE ENTIRE LENGTH OF REACTIONS ON ANY GIVEN QUERY
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
})

// INITIALIZE THE THOUGHT MODEL
const Thought = model('thought', thoughtSchema)

module.exports = Thought;
