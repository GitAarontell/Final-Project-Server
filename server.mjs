// adds stricter rules to javascript syntax
'user strict';

import express from 'express'; // express for the server
import {happy, angry, confused, disconnected, sad, scared, nervous, bored} from "./serverData.mjs" // data to be sent

// set up server
const app = express();
const PORT = 3000;

// listen for connections on port 3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
}); 

app.use(express.json());

// handles a get request to /info
app.post('/info', (req,res) => {

    // the request sends over data, and is put into the data variable
    let data = req.body.data;

    // if statements that return different data depending on the value that data variable holds
    if (data == "Happy") {
        data = happy;
    } else if (data == "Angry") {
        data = angry;
    } else if (data == "Confused") {
        data = confused;
    } else if (data == "Disconnected") {
        data = disconnected;
    } else if (data == "Sad") {
        data = sad;
    } else if (data == "Scared") {
        data = scared;
    } else if (data == "Nervous") {
        data = nervous;
    } else if (data == "Bored") {
        data = bored;
    }

    // sends the data
    res.send(data);
});

