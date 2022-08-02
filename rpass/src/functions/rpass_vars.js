// Current user
var current_username;
var current_masterpassword;
var current_salt;
//var current_language = 0;
var current_darktheme;
var current_generatorsize;
var current_icon;
var current_defvalue_user;

// Default user
var default_username = "root";
var default_masterpassword = "root";
var default_salt = "20031104";
var default_language = 0;
var default_darktheme = false;
var default_generatorsize = 16;
var default_icon;
var default_defvalue_user = "";

function VarsHandler_Set() {
    localStorage.current_language = 1;
    
}


// Global passwordlist
var passwordlist = [
    ["pass_name1", "pass_email1", "pass_password1", "pass_link1", "pass_desc1"],
    ["pass_name2", "pass_email2", "pass_password2", "pass_link2", "pass_desc2"],
    ["pass_name3", "pass_email3", "pass_password3", "pass_link3", "pass_desc3"],
    ["pass_name4", "pass_email3", "pass_password3", "pass_link3", "pass_desc3"],
    ["pass_name5", "pass_email3", "pass_password3", "pass_link3", "pass_desc3"],
    ["pass_name6", "pass_email3", "pass_password3", "pass_link3", "pass_desc3"],
    ["pass_name7", "pass_email3", "pass_password3", "pass_link3", "pass_desc3"],
];