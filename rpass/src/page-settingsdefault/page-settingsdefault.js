function Interface_Page_SettingsDefault(x) {
    const page_settingsdefault = document.querySelector(".contents-page2");
        if (x == 1) {
            page_settingsdefault.style.opacity = "1";
        } else if (x == 0) {
            page_settingsdefault.style.opacity = "0";
        }
}

function OpenSettingsDefaultLanguage() {
    // Lose focus
    setTimeout(() => {
    const button__settingdefault_deflang = document.querySelector('#button--settingsdefault-deflang');
    button__settingdefault_deflang.blur();
    }, 200);
    // Function
    Interface_Page_SettingsDefault(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-defaultlang/page-settings-option-defaultlang.html";
     }, 500);
}

function OpenSettingsDefaultTheme() {
    // Lose focus
    setTimeout(() => {
    const button__settingdefault_deftheme = document.querySelector('#button--settingsdefault-deftheme');
    button__settingdefault_deftheme.blur();
    }, 200);
    // Function
    Interface_Page_SettingsDefault(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-defaulttheme/page-settings-option-defaulttheme.html";
     }, 500);
}

function OpenSettingsAbout() {
    // Lose focus
    setTimeout(() => {
    const button__settingdefault_about = document.querySelector('#button--settingsdefault-about');
    button__settingdefault_about.blur();
    }, 200);
    // Function
    Interface_Page_SettingsDefault(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-about/page-settings-option-about.html";
     }, 500);
}

function OpenSettingsImport() {
    // Lose focus
    setTimeout(() => {
    const button__settingdefault_import = document.querySelector('#button--settingsdefault-import');
    button__settingdefault_import.blur();
    }, 200);
    // Function
    Interface_Page_SettingsDefault(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-import/page-settings-option-import.html";
     }, 500);
}

function OpenSettingsExport() {
    // Lose focus
    setTimeout(() => {
    const button__settingdefault_export = document.querySelector('#button--settingsdefault-export');
    button__settingdefault_export.blur();
    }, 200);
    // Function
    Interface_Page_SettingsDefault(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-export/page-settings-option-export.html";
     }, 500);
}

function OpenSettingsAdvanced() {
    // Lose focus
    setTimeout(() => {
    const button__settingdefault_advanced = document.querySelector('#button--settingsdefault-advanced');
    button__settingdefault_advanced.blur();
    }, 200);
    // Function
    Interface_Page_SettingsDefault(0);
    setTimeout(() => { 
        window.location.href = "../page-settingsadvanced/page-settingsadvanced.html";
     }, 500);
}

function OpenSettingsBackups() {
    // Lose focus
    setTimeout(() => {
    const button__settingdefault_openbackups = document.querySelector('#button--settingsdefault-openbackups');
    button__settingdefault_openbackups.blur();
    }, 200);
    // Function
}

const { shell } = require('electron');
const url1 = "https://github.com";

function OpenSettingsSaves() {
    // Lose focus
    setTimeout(() => {
    const button__settingdefault_opensaves = document.querySelector('#button--settingsdefault-opensaves');
    button__settingdefault_opensaves.blur();
    }, 200);
    // Function
    //alert("test");
    //shell.beep;
    shell.openExternal(url1);
}
