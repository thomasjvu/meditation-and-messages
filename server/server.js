const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const connectDB = require('./config/db')
const logger = require("morgan")
const PORT = process.env.PORT || 3005;
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger("dev"))
app.use(errorHandler)

// app.use('/messages', require('./routes/messageRoutes'))
app.use('/users', require('./routes/userRoutes'))
app.use('/notes', require('./routes/noteRoutes'))


app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
    console.log(`Please visit the website at http://localhost:${PORT}`);
})
