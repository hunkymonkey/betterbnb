var {app} = require('./server.js')
// var {populateData} = require('../database/populate.js');
var PORT = 3000;

app.listen(PORT, () => {
  console.log('connected to server');
});