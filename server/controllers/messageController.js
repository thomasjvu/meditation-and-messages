const asyncHandler = require('express-async-handler')

// ROUTE    /messages/
// PRIV?    Private Access
// DESC.    @GET (Read) All Messages
const getAllMessages = asyncHandler(async (req, res) => {
    res.json({ message: 'Read All Messages'})
})

// ROUTE    /messages/:id
// PRIV?    Private Access
// DESC.    @GET (Read) Single Message
const getSingleMessage = asyncHandler(async (req, res) => {
    res.json({ message: `Read Single Message ${req.params.id}`})
})

// ROUTE    /messages/
// PRIV?    Private Access
// DESC.    @POST (Create) All Messages
const postSingleMessage = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.json({ message: `Create Single Message`})
})

// ROUTE    /messages/:id
// PRIV?    Private Access
// DESC.    @PUT (Update) Single Message
const putSingleMessage = asyncHandler(async (req, res) => {
    res.json({ message: `Update Single Message ${req.params.id}`})
})

// ROUTE    /messages/:id
// PRIV?    Private Access
// DESC.    @DELETE (Delete) Single Message
const deleteSingleMessage = asyncHandler(async (req, res) => {
    res.json({ message: `Delete Single Message ${req.params.id}`})
})


module.exports = {
    getAllMessages, postSingleMessage, getSingleMessage, putSingleMessage, deleteSingleMessage
}
