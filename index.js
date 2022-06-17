const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const twilio = require("twilio");
const games = require('./games/games');

app.use(bodyParser.urlencoded({extended:false}));

app.post('/message', async(req,res) => {
    console.log('Request Message');
    const user = await req.body.Body.toLowerCase();
    await res.send(`<Response><Message>${games.jokenpo(user)}</Message></Response>`);
});

app.listen(3030, () => {
    console.log("Server is running on port 3030");
})