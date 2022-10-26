// IMPORT ROUTER FROM EXPRESS
const router = require('express').Router();

// CALL FUNCTIONS FROM THOUGHTCONTROLLERS.JS

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtControllers.js');

// endpoint /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// endpoint /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;
