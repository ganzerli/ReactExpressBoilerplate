// To set up a server with express and react , basics.

--:: make a folder somewhere

--:: inside the folder (in this case readme), FIRST thing npm init in that folder with terminal.

--:: with the package.json , install dependencies : npm i express concurrently. //concurrently is to run with the backend later

--:: and other dev deendencies like npm i nodemon --save-dev // nodemon updates the server when saving developing the program

--:: package.json needs some scripts to run the dependencies, "start":"node server.js" for the express server.js not built yet,
"server":"nodemon server.js" same server.js and updates on save.

--:: in the root folder same as the package.json a file server.js will run when calling npm run start or scripts hitting that file, this server.js is the server..

--:: in server.js imported express makes a route .get("/route/here", (req,res)=>{arr=[]; res.json(arr)}); and listens to the port returning console.log("all good ") in this case

--:: DEFINING THE BACKEND URL AS PROXY --> for the fetch request of the front-end to write the route without including the full the app needs a proxy value in package.json of the client --> "proxy": "http://localhost:5000". in the request from the frontend the beginning of the path is already included.

-

### HAVING THE SERVER LISTENING TO THE PORT WITH THE ROUTE, AN APPLICATION CAN REACH THE RESPONSE, QUERYING THE ROUTE ON THE PORT SEt.

--:: for a react app: create-react-app client , makes a folder client and unpackages all needed for react

--:: with the react boilerplate, in the client folder we can run the script from react npm start , it wil start the server pf react in the 3000,
now the server starts in the server / root folder and the client - frontend from the client folder with npm run in port 3000

--:: the server will work together so to use them together the separate scripts have to be run wnen starting one or another

--:: in src folder of the react app can go all the components needed to fetch the data, for example in the componentWillMount can fetch the array in a component displaying a list of something from the backend
