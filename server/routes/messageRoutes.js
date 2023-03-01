const express = require('express')
const router = express.Router()
const { getSingleMessage, getAllMessages, postSingleMessage, deleteSingleMessage, putSingleMessage} = require('../controllers/messageController')

// ROUTE    /messages/
// DESC.    @GET (Read) All Messages
router.get('/', getAllMessages)

// ROUTE    /messages/
// DESC.    @POST (Create) All Messages
router.post('/', postSingleMessage)

// ROUTE    /messages/:id
// DESC.    @GET (Read) Single Message
router.get('/:id', getSingleMessage)

// ROUTE    /messages/:id
// DESC.    @PUT (Update) Single Message
router.put('/:id', putSingleMessage)

// ROUTE    /messages/:id
// DESC.    @DELETE (Delete) Single Message
router.delete('/:id', deleteSingleMessage)

module.exports = router
