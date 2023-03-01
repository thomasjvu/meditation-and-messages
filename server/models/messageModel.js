const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Please add a text value"],
        },
        public: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Message", messageSchema);
