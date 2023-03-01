const asyncHandler = require('express-async-handler')
const Message = require('../models/messageModel')

// ROUTE    /messages/
// PRIV?    Private Access
// DESC.    @GET (Read) All Messages
const getAllMessages = asyncHandler(async (req, res) => {

    const messages = await Message.find()

    res.status(200).json(messages)
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

    const message = await Message.create({
        text: req.body.text,
    })

    res.status(200).json(message)
})

// ROUTE    /messages/:id
// PRIV?    Private Access
// DESC.    @PUT (Update) Single Message
const putSingleMessage = asyncHandler(async (req, res) => {

    const message = await Message.findById(req.params.id)

    if (!message) {
        res.status(400)
        throw new Error('Message not found!')
    }

    const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedMessage)
})

// ROUTE    /messages/:id
// PRIV?    Private Access
// DESC.    @DELETE (Delete) Single Message
const deleteSingleMessage = asyncHandler(async (req, res) => {

    const message = await Message.findById(req.params.id)

    if (!message) {
        res.status(400)
        throw new Error('Message not found!')
    }

    const deletedMessage = await Message.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json(deletedMessage)
})


module.exports = {
    getAllMessages, postSingleMessage, getSingleMessage, putSingleMessage, deleteSingleMessage
}
