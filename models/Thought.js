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
            type: Date, default: Date.now
        }
    }
)

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
            type: Date, default: Date.now
        },
        username: 
        {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    }
);

// VIRTUAL FIELD FOR REACTIONCOUNT TO RETRIEVE ENTIRE LENGTH OF REACTI0NS ON ANY GIVEN QUERY
reactionSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
})

// INITIALIZE THE THOUGHT MODEL
const Thought = model('thought', thoughtSchema)

module.exports = Thought;
