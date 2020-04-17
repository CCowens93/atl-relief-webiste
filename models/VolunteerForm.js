const mongoose = require('mongoose')

const { Schema } = mongoose

const VolunteerForm = new Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    contact: String,
    age: Number,
    job: String,
    medicalRelief: String,
    typeOfHelp: String
})

mongoose.model('volunteerForm', VolunteerForm)