#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";

const app = express();
const args = minimist(process.argv.slice(2));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Format copied from database in-class exercise :p

// READ (HTTP method GET) at root endpoint /app/
// Check endpoint at /app/ that returns 200 OK
app.get("/app", (req, res) => {
	res.status(200).send("200 OK");
});

// Endpoint /app/rps/ that returns {"player":"(rock|paper|scissors)"}
app.get("/app/rps/", (req, res) => {
    res.status(200).json(rps());
});

