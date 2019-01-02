// 1 route that returns an array
// get express
const express = require("express");

//initialize the server
const app = express();

//adding a route where to listen
app.get("/api/array", (req, res) => {
  //creating the response
  //just inventing an array
  const ResponseArray = [
    //filling the array with objects
    { prop1: "value1", prop2: "value2", usefuleData: "super useful data " },
    { prop1: "value1", prop2: "value2", usefuleData: "ser use data " },
    {
      prop1: "value1",
      prop2: "value2",
      usefuleData: "superd fdsugdssdfgeful data "
    },
    { prop1: "value1", prop2: "value2", usefuleData: "sMEGA DATA  " },
    {
      prop1: "value1",
      prop2: "value2",
      usefuleData: "super usefulDN($)§RMS)PM22 is my new password"
    }
  ];
  //parsing the array to output as response
  res.json(ResponseArray);
});

// giving a port number port 3000 is the default or create react app.
const port = 5000;

// give the server the port to listen and start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
