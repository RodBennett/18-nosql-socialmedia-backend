// IMPORT ROUTER FROM EXPRESS
const router = require('express').Router();

// CALL FUNCTIONS IN THE USERCONTROLLER.JS
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userControllers.js');

// endpoint /api/users
router.route('/').get(getUsers).post(createUser);

// endpoint /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;


