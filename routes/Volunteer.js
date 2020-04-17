const mongoose = require('mongoose')

const Volunteer = mongoose.model('volunteer')

module.exports = (app) => {
    app.get('/api/volunteer', async (req, res) => {
        let volunteer = await Volunteer.find()
        return res.status(200).send(volunteer)
    })

    app.post('/api/volunteer', async (req, res) => {
        let volunteer = await Volunteer.create(req.body)
        return res.status(201).send({
            error: false,
            volunteer
        })
    })
    app.put(`/api/volunteer/:id`, async (req, res) => {
        const {id} = req.params;
    
        let volunteer = await Volunteer.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          volunteer
        })
    
      });
    
      app.delete(`/api/volunteer/:id`, async (req, res) => {
        const {id} = req.params;
    
        let volunteer = await Volunteer.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          volunteer
        })
    
      })
}