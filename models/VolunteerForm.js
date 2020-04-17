const mongoose = require('mongoose')

const { Schema } = mongoose

const VolunteerForm = new Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    call: Boolean,
    text: Boolean,
    emailPref: Boolean,
    paperMailer: Boolean,
    age: Number,
    job: String,
    medicalRelief: String,
    helpElderlyAndOrDisabled: Boolean,
    deliverFood: Boolean,
    mealPrep: Boolean,
    sewing: Boolean,
    deliverMailers: Boolean,
    host: Boolean,
    coverExpenses: Boolean,
    searchForItems: Boolean,
    updates: Boolean,
    none: Boolean,
    other: String
})

mongoose.model('volunteerForm', VolunteerForm)