// @flow
'use strict';

const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(function(req, res, next) {
    if(/.js/.test(req.path)) {
        next();
    }
    console.log('Received request, delaying.');
    //This is an artificial delay to simulate a complex (and slow) app.
    global.setTimeout(next, 1500);
})

// Static file serving, with CORS access from any origin.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080);

global.console.log('Started server.');
