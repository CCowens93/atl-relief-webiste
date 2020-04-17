const mongoose = require('mongoose')

const Form = mongoose.model('volunteer')

module.exports = (app) => {
    app.get('/api/form', async (req, res) => {
        let form = await Form.find()
        return res.status(200).send(form)
    })

    app.post('/api/form', async (req, res) => {
        let form = await Form.create(req.body)
        return res.status(201).send({
            error: false,
            form
        })
    })
    app.put(`/api/form/:id`, async (req, res) => {
        const {id} = req.params;
    
        let form = await Form.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          form
        })
    
      });
    
      app.delete(`/api/form/:id`, async (req, res) => {
        const {id} = req.params;
    
        let form = await Form.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          form
        })
    
      })
}