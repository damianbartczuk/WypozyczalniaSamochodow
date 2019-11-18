//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/WypozyczalniaSamochodow'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/WypozyczalniaSamochodow/index.html'));
});

app.post('/dodajSamochod', function (req, res) {
  res.send(req.body);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
