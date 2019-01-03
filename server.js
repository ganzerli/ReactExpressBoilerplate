// 1 route that returns an array
// get express
const express = require("express");
// get a body parser for the post requests
const bodyParser = require("body-parser");

//initialize the server
const app = express();

//just inventing an array
const responseArray = [
  //filling the array with objects
  { id: "1", prop2: "value2", usefulData: "DATA 1" },
  { id: "2", prop2: "value2", usefulData: "DATA 2" },
  {
    id: "3",
    prop2: "value2",
    usefulData: "DATA 3"
  },
  { id: "4", prop2: "value2", usefulData: "DATA 4" },
  {
    id: "5",
    prop2: "value2",
    usefulData: "DATA 5"
  }
];
// let use the app the bodyparser to parse the json requests
app.use(bodyParser.json());
//adding a route where to listen
app.get("/api/array", (req, res) => {
  //creating the response
  //parsing the array to output as response
  res.json(responseArray);
});
// accessing to request parameters
app.get("/api/params/:id", (req, res) => {
  res.json(req.params);
});

app.post("/api/array", (req, res) => {
  responseArray.push(req.body);
  res.json(responseArray);
});
// environmant variable
const environmentPort = process.env.PORT;
// giving a port number port 3000 is the default or create react app.
const port = environmentPort || 5000;

// give the server the port to listen and start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
