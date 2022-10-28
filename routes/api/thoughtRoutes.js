// IMPORT ROUTER FROM EXPRESS
const router = require('express').Router();

// CALL FUNCTIONS FROM THOUGHTCONTROLLERS.JS
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtControllers.js');

// endpoint /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// endpoint /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

// endpoint /api/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createReaction)
    
// endpoint /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;
