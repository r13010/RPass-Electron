const { fail } = require('assert');
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exit } = require('process');

function ahh(){
    app.quit();
}