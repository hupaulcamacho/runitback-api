const express = require('express');
const router = express.Router();

// import database configuration
const db = require('../db/dbconfig');

// get all users
router.get('/', async (request, response) => {
    try {
        let users = await db.any('SELECT * FROM users');
        response.json(users);
    } catch (error) {
        console.log(error);
        response.json(error);
    }
});

// get user by id
router.get('/:id', async (request, response) => {
    const userId = request.params.id
    try {
        let user = await db.one('SELECT * FROM users WHERE id=$1', userId)
        response.json({
            message: 'User retrieved...',
            payload: user,
        })
    } catch (error) {
        console.log(error);
        response.json({
            message: 'Unable to retrieve user...',
        })
    }
})

//create a new user
router.post('/new', async (request, response) => {
    const { username, email, region, controller } = request.body
    try {
        db.none('INSERT INTO users (username, email, region, controller) VALUES ($1, $2, $3, $4)', [username, email, region, controller]);

        response.send({
            message: 'user created',
            user: { username, email, region, controller }
        });
    } catch (error) {
        console.log(error)
        response.json({
            message: 'Unable to create user'
        });
    }
});

// delete user
router.delete('/delete/:id', async (request, response) => {
    const userId = request.params.id
    try {
        let user = await db.one('SELECT * FROM users WHERE id=$1', userId)
        db.oneOrNone('DELETE FROM users WHERE id = $1', [userId])
        response.json({
            message: 'user deleted...',
            user
        })
    } catch (error) {
        console.log(error)
        response.json({
            message: 'Unable to delete user'
        });
    }
})
module.exports = router;