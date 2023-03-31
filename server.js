#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";

const app = express();
const args = minimist(process.argv.slice(2));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// server.js file that takes an arbitrary port number as a command line argument (i.e. I should be able to run it with node server.js --port=$PORTNUMBER). The port should default to 5000 if no argument is given.
let port = args.port || 5000 // default to 5000


// Format copied from database in-class exercise :p

// READ (HTTP method GET) at root endpoint /app/
// Check endpoint at /app/ that returns 200 OK
app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
});

// Endpoint /app/rps/ that returns {"player":"(rock|paper|scissors)"}
app.get('/app/rps/', (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
});

// Endpoint /app/rpsls/ that returns {"player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls/', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
});

//Endpoint /app/rps/play/ should accept request bodies in the following forms: shot=(rock|paper|scissors) (URLEncoded) 
//or {"shot":"(rock|paper|scissors)"} (JSON) as data bodies and return {"player":"(rock|paper|scissors)",
//"opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}

app.get('/app/rps/play/', (req, res) => { //url
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
});

app.get('/app/rps/play/:shot', (req, res) => { //data bodies
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
});

app.post('app/rps/play/', (req, res) => { //JSON
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
});

//now for rpsls
app.get('/app/rpsls/play/', (req, res) => { //url
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
});

app.get('/app/rpsls/play/:shot', (req, res) => { //data bodies
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});

app.post('app/rpsls/play/', (req, res) => { //JSON
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
});





//default gateway
app.get('/app/*', (req, res) => { res.status(404).send("404 NOT FOUND"); });

//root endpoint
app.listen(port, () => { console.log("Server running on port %PORT%".replace("%PORT%", port)); });