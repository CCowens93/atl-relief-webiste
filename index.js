const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/resource');
require('./models/volunteer');
require('./models/volunteerForm')
require('./models/groups')

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/atlDb`);

app.use(bodyParser.json());

require('./routes/resource')(app);
require('./routes/volunteer')(app);
require('./routes/volunteerForm')(app);
require('./routes/groups')(app);

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