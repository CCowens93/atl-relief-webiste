const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/Resource');
require('./models/Volunteer');
require('./models/VolunteerForm')
require('./models/Groups')

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/atlDb`);

app.use(bodyParser.json());

require('./routes/Resource')(app);
require('./routes/Volunteer')(app);
require('./routes/VolunteerForm')(app);
require('./routes/Groups')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});