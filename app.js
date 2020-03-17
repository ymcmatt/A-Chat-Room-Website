const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require("./config/database")

// connect to Database
mongoose.connect(config.database, {useUnifiedTopology: true, useNewUrlParser: true });    

// on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to databse '+ config.database)
})

// on error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+ error)
});

const app = express();

const users = require('./routes/users')

const port = 3000;

// Cors middleware
app.use(cors());

// Body Parse middleware
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')))

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport') (passport);

app.use('/users', users);

app.get('/', (req,res) =>{
    res.send('Invalid endpoint')
})

app.listen(port, ()=>{
    console.log('Server start on port '+ port)
});

