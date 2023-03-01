const express = require('express')
const router = express.Router()
const { getSingleMessage, getCurrentUserMessages, getAllMessages, postSingleMessage, deleteSingleMessage, putSingleMessage} = require('../controllers/messageController')
const { protect } = require('../middleware/authMiddleware')

// ROUTE    /messages/
// DESC.    @GET (Read) All Messages
router.get('/', getAllMessages)

// ROUTE    /messages/
// DESC.    @GET (Read) Any User's Messages
// router.get('/user/:id', getUserMessages)

// ROUTE    /messages/
// DESC.    @GET (Read) Current User's Messages
router.get('/user', protect, getCurrentUserMessages)

//
// ROUTE    /messages/
// DESC.    @POST (Create) All Messages
router.post('/', protect, postSingleMessage)

// ROUTE    /messages/:id
// DESC.    @GET (Read) Single Message
router.get('/:id', protect, getSingleMessage)

// ROUTE    /messages/:id
// DESC.    @PUT (Update) Single Message
router.put('/:id', protect, putSingleMessage)

// ROUTE    /messages/:id
// DESC.    @DELETE (Delete) Single Message
router.delete('/:id', protect, deleteSingleMessage)

module.exports = router
