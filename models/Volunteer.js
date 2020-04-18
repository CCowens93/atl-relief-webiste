const mongoose = require('mongoose')

const { Schema } = mongoose

const VolunteerSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    call: String,
    text: String,
    emailPref: String,
    paperMailer: String,
    age: String,
    job: String,
    medicalRelief: String,
    helpElderlyAndOrDisabled: String,
    deliverFood: String,
    mealPrep: String,
    sewing: String,
    deliverMailers: String,
    host: String,
    coverExpenses: String,
    searchForItems: String,
    updates: String,
    none: String,
    other: String,
    resetOnSubmit: Boolean
})

mongoose.model('volunteer', VolunteerSchema)