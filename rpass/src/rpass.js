/*const { fail } = require('assert');
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exit } = require('process');

//BUTTONS

    //nav tabs
function buttonTabLogin() {
    //Show login page
    InterfaceShowLogin(1);
    //Hide others
    InterfaceShowCreateuser(0);
}

function buttonTabCreateuser() {
    //Show create user
    InterfaceShowCreateuser(1);
    //Hide others
    InterfaceShowLogin(0);
}

//INTERFACE SHOW
function InterfaceShowLogin(x) {
    const loginpage = document.querySelector("#login-page");
    if (x == 1) {
        loginpage.style.opacity = "1";
    } else if (x == 0) {
        loginpage.style.opacity = "0";
    }
} 

function InterfaceShowCreateuser(x) {
    const eulapage = document.querySelector("#eula-page");
    if (x == 1) {
        eulapage.style.opacity = "1";
    } else if (x == 0) {
        eulapage.style.opacity = "0";
    }
}

function Loading(x) {
    const loading = document.querySelector("#loading");
    if (x == 1) {
        loading.style.opacity = "1";
    } else if (x == 0) {
        loading.style.opacity = "0";
    }
}

function InterfaceShowSectionLogin(x) {
    const loginsection = document.querySelector("#login-section");
    if (x == 1) {
        loginsection.style.opacity = "1";
    } else if (x == 0) {
        loginsection.style.opacity = "0";
    }
}*/
//INTERFACE HIDE ALL
function InterfaceHideAll(){
    //Loading(1);
    //InterfaceShowLogin(0);
    //InterfaceShowCreateuser(0);
    //InterfaceShowSectionLogin(0);
    //setTimeout(() => { Loading(0); }, 0); //1700
    //setTimeout(() => { InterfaceShowLogin(1); InterfaceShowSectionLogin(1); }, 0); //2000
    //window.location.href = "element-textbox/element-textbox.html";
    window.location.href = "page-login/page-login.html";
    
}/*
//STARTUP
function Startup(){
    InterfaceHideAll();
}
*/


