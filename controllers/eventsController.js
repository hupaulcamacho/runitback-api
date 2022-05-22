const express = require('express');
const router = express.Router();

// import database config
const db = require('../db/dbconfig');

// get all events
router.get('/', async(request, response) => {
    try {
        let events = await db.any('SELECT * FROM events');
        response.json({
            message: 'Events retrieved...',
            payload: events
        })
    } catch (error) {
        console.log(error);
        response.json(error); 
    }
})

// get event by id
router.get('/:id', async (request, response) => {
    const eventId = request.params.id
    try {
        let user = await db.one('SELECT * FROM events WHERE id=$1', eventId)
        response.json({
            message: 'Event retrieved...',
            payload: user
        })
    } catch (error) {
        console.log(error);
        response.json({
            message: 'Unable to retrieve event..',
        })
    }
})

// get tournaments for each event

router.get('/:id/tournaments', async (request, response) => {
    const eventId = request.params.id
    try {
        let tournaments = await db.any('SELECT * FROM tournaments WHERE eventId=$1', eventId);
        response.json({
            message: 'Tournaments retrieved...',
            payload: tournaments
        })
    } catch (error) {
        console.log(error);
        response.json({
            message: 'Unable to retrieve tournaments..',
        })
    }
})

module.exports = router;