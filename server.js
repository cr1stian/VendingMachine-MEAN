const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');

// Setting Cors
app.use(cors())


// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));



// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



// Mongo Client
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vendor');








// Routers
const vendor = require('./routers/vendor');
app.use(vendor)

const customer = require('./routers/customer');
app.use(customer)




// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});




//Set Port
const port = process.env.PORT || 3000;
app.set('port', port);


const server = http.createServer(app);


server.listen(port, () => console.log(`Running on localhost:${port}`));
