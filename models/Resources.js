const mongoose = require('mongoose')

const { Schema } = mongoose

const ResourceSchema = new Schema({
    name: String,
    location: String,
    phoneNumber: Number,
    email: String,
    description: String
})

mongoose.model('resource', ResourceSchema)