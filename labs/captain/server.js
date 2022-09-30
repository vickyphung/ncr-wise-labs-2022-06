//Require 
const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const Log = require('./models/Log');
const methodOverride = require('method-override');


// -------------------------
// Mongoose Connection Stuff
// -------------------------
 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
  });
   
  // -------------------------
  // Setting Up View Engine
  // -------------------------
   
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
   
  // -------------------------
  // Setting Up Body Parser
  // -------------------------
   
  app.use(express.urlencoded({extended:false}));
   
  
  // -------------------------
  // Method Override
  // -------------------------
  
//   app.use(methodOverride('_method'));
  
  // -------------------------
  // Log Routes Go Here
  // -------------------------


 // Index

//  app.get('/logs', (req, res) => {
//     res.send(logs);
// });

app.get('/logs', (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render('logs/Index', {
      logs: allLogs
    });
    console.log('Log Index Page')
  })
});




// New
app.get('/logs/new', (req, res) => {
  res.render('logs/New');
  console.log('Make a New Log Form Page')
});


// Create a new Log
app.post('/logs', (req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (error, createdLog) => {
    res.redirect('/logs')
    console.log('Log Created')
  })
});


// Update

app.put('/edit/log/:id', (req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true
  } else {
    req.body.shipIsBroken = false
  }
  Log.updateOne({
    _id: req.params.id
  }, req.body, (error, data) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      });
    } else {
      res.redirect(`/logs`);
      console.log('Log Updated')
    }
  });
});


app.get('/edit/:id', (req, res) => {
  Log.findOne({ _id: req.params.id }, (error, foundLog) => {
    res.render('logs/Edit', {
      log: foundLog
    });
    console.log('Edit Log Page')
  });
});


// Delete

app.delete('/delete/:id', (req, res) => {
  Log.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('/logs');
    console.log('Log Deleted')
  })
});

// Show

app.get('/logs/:id', (req, res) => {
  Log.findOne({ _id: req.params.id }, (error, foundLog) => {
    res.render('logs/Show', {
      log: foundLog
      
    });
    console.log('Show Log Route')

  });
});




// -------------------------
// App Is Listening Thing
// -------------------------
 const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`chillin on port ${PORT}`);
  });
  



//Log Schema
//require Schema, models/Log.js
//Route to Create a new Log, POST
//Create an Index Page, Index.jsx
//Route to get and render Index Page, GET


//Create a New Fruit Page, New.jsx
//Route to Create a new Log, POST
//Link to Create a new Log page in Index
//Create a Log


//Show Route, GET
//Create a Show Page, Show.jsx
//Link to the show page from the Index