const { response } = require('express');
const express = require('express')
const app = express()
const port = 3001
const path = require('path');

//middleware
app.use(express.json())

// Render Html File
app.get('/', function(req, res) {
  res.send("Hello world");
});

app.post("/survey", handleSurvey)

function handleSurvey(req, res){
  console.log(req.body)
  res.send({"status":200,"message":"Thank you for your survey completion"})
}

app.listen(port, () => {
  // Code.....
})