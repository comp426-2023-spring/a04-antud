#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";

const app = express();
const args = minimist(process.argv.slice(2));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

