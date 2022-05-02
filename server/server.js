//This is where we still import our server/express code
const express = require("express");
const cors = require("cors")// Cross Origin Resource Sharing - Allows to share resources(images,data,etc)across URL's.

// We will no incoke express and set it equal to a variable called app.
const app = express();

//Middleware - External code you want to run every time your server starts up.
app.use(express.json()); // Allow our server to accept JSON data.
app.use(cors()); // Allows our server to activate cors

//creating a makeshift/dummy database
// Making our basic get request
const dummyInventory = ["potatoes", "onion", "garlic", "breads","eggs", "milk","salt", "steak", "kale","tomatoes"];

//creating our endpoints
//Making our basic get request AND our request
app.get("/api/inventory", (req, res) => {
    console.log(req.query);

    if(req.query.item) {
        const filterItems = dummyInventory.filter((invItem) => {
            return invItem.toLowerCase().includes(req.query.item.toLocaleLowerCase());
        })
        return res.status(200).send(filteredInventory);
    } else {
        return res.status(200).send(dummyInventory);
    }
})
//Making our params get request
app.get("/api/inventory/:id", (req, res) => {
    console.log(req.params);
    const numIndex = +req.params.id; // We are type coercing the string-number into a regular number
    res.status(200).send(dummyInventory[numIndex]);
})

//Let's officially open the door to our server
//First,creat a variable to store our port number
const SERVER_PORT = 5050;
app.listen(5050, () => {
    console.log("Server is running on 5050");
})