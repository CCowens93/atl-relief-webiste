const mongoose = require('mongoose')

const Resource = mongoose.model('resource')

module.exports = (app) => {
    app.get('api/resource', async(req, res) => {
        let resource = await Resource.find()
        returnres.status(200).send(resource)
    })

    app.post(`/api/resource`, async (req, res) => {
        let resource = await Resource.create(req.body);
        return res.status(201).send({
          error: false,
          resource
        })
      })
    
      app.put(`/api/resource/:id`, async (req, res) => {
        const {id} = req.params;
    
        let resource = await Resource.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          resource
        })
    
      });
    
      app.delete(`/api/resource/:id`, async (req, res) => {
        const {id} = req.params;
    
        let resource = await Resource.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          resource
        })
    
      })
}