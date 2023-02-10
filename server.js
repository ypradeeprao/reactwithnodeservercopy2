const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const path = require('path');
var axios = require('axios');
const mongojs= require("./mongorest.js")
const nodemailerjs= require("./nodemailernode.js")
const twilionodejs= require("./twilionode.js")
const imgbbrestjs= require("./imgbbrest.js")
//const fileuploadjs = require("./fileupload.js")
const bodyParser = require('body-parser');
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.use(express.static(path.join(__dirname, 'build')));


app.get('/react', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
    console.log("express_backend start");
    const jsonContent = JSON.stringify({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    res.end(jsonContent);
//  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

 app.post('/createtable', async (req, res) => {
  console.log("createtabledfd");
   let mongojsresp = await mongojs.createtable(req) ; 
  
  
  
   res.end( JSON.stringify(mongojsresp));
 })

 app.post('/edittable', async (req, res) => {
  
   let mongojsresp = await mongojs.edittable(req) ; 
   res.end( JSON.stringify(mongojsresp));
 })


 app.post('/deletetable', async (req, res) => {
  
   let mongojsresp = await mongojs.deletetable(req) ; 
   res.end( JSON.stringify(mongojsresp));
 })
 

 app.post('/retrieverecords', async (req, res) => {
  
   var x = await mongojs.retrieverecords(req) ; 
   res.end( JSON.stringify({x}));
 })


 app.post('/insertrecords', async (req, res) => {
  
   var x = await mongojs.insertrecords(req) ; 
   res.end( JSON.stringify({}));
 })

 app.post('/editrecords', async (req, res) => {
  
   var x = await mongojs.editrecords(req) ; 
   res.end( JSON.stringify({}));
 })

 app.post('/deleterecords', async (req, res) => {
  
   var x = await mongojs.deleterecords(req) ; 
   res.end( JSON.stringify({}));
 })

 app.post('/sendmail', async (req, res) => {
  
  var x = await nodemailerjs.sendmail(req) ; 
  res.end( JSON.stringify({}));
})


app.post('/sendmobilemessage', async (req, res) => {
  
  var x = await twilionodejs.sendmobilemessage(req) ; 
  res.end( JSON.stringify(x));
})

app.post('/getuploadimagerequestjson', async (req, res) => {
  
  var x = await imgbbrestjs.getpostrequestjson(req) ; 
  res.end( JSON.stringify(x));
})


app.post('/fileupload', async (req, res) => {
  
  var x = await fileuploadjs.fileupload(req) ; 
  res.end( JSON.stringify(x));
})
