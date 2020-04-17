const mongoose = require('mongoose')

const { Schema } = mongoose

const VolunteerSchema = new Schema({
    name: String
})

mongoose.model('volunteer', VolunteerSchema)