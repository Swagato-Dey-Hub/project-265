const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    phoneno: {
        type: "String",
        required: true
    },
    message: {
        type: "string",
        required: true
    }
}, { timestamps: true });

ContactSchema.index({ email: 1 }, { unique: false });
module.exports = mongoose.model('Contact',ContactSchema);