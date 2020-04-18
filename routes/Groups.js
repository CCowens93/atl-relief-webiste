const mongoose = require('mongoose')

const Group = mongoose.model('groups')

module.exports = (app) => {
    app.get('/api/group', async (req, res) => {
        let group = await Group.find()
        return res.status(200).send(group)
    })

    app.post('/api/group', async (req, res) => {
        let group = await Group.create(req.body)
        return res.status(201).send({
            error: false,
            group
        })
    })
    app.put(`/api/group/:id`, async (req, res) => {
        const {id} = req.params;
    
        let group = await Group.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          group
        })
    
      });
    
      app.delete(`/api/group/:id`, async (req, res) => {
        const {id} = req.params;
    
        let group = await Group.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          group
        })
    
      })
}