//IMPORT ROUTER FROM EXPRESS
const router = require('express').Router();

// CALL FUNCTIONS IN THE USERCONTROLLER.JS

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userControllers.js');

    // endpoint api/users
router.route('/').get(getUsers).post(createUser);
    // endpoint api/users/:userId
router.route('/:userId').get(getSingleUser)
    // endpoint to UPDATE a user: api/users/:userId
router.route('/:userId').put(updateUser)
    // edndoint to DELETE a user: api/users/:userId
router.route('/users/:userId').delete(deleteUser)

module.exports = router;


