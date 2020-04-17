const mongoose = require('mongoose')

const { Schema } = mongoose

const VolunteerSchema = new Schema({
    name: String,
    phone: String,
    email: String
})

mongoose.model('volunteer', VolunteerSchema)