const express = require('express');
const { getUsers, addUser } = require('../controllers/userController');

const router = express.Router();

// GET all users
router.get('/', getUsers);

// POST a new user
router.post('/', addUser);

module.exports = router;
