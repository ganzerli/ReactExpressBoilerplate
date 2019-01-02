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
    { id: "1", prop2: "value2", usefuleData: "DATA 1" },
    { id: "2", prop2: "value2", usefuleData: "DATA 2" },
    {
      id: "3",
      prop2: "value2",
      usefuleData: "DATA 3"
    },
    { id: "4", prop2: "value2", usefuleData: "DATA 4" },
    {
      id: "5",
      prop2: "value2",
      usefuleData: "DATA 5"
    }
  ];
  //parsing the array to output as response
  res.json(ResponseArray);
});

// giving a port number port 3000 is the default or create react app.
const port = 5000;

// give the server the port to listen and start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
