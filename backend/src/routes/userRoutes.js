const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user/create', userController.createUser);

module.exports = router;
