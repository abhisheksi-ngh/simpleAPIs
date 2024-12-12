const db = require('../config/db');

// Get all users
const getUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results);
        }
    });
};

// Add a new user
const addUser = (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding user');
        } else {
            res.status(201).send('User added successfully');
        }
    });
};

module.exports = { getUsers, addUser };
