function GoBack() {
    // Lose focus
    setTimeout(() => {
    const button__goback = document.querySelector('#button--goback');
    button__goback.blur();
    }, 200);
    // Function
    Interface_Page_SettingsAdvanced(0);
    setTimeout(() => { 
        window.location.href = "../page-settingsdefault/page-settingsdefault.html";
     }, 500);
}

function Interface_Page_SettingsAdvanced(x) {
    const page_settingsadvanced = document.querySelector(".contents-page2");
        if (x == 1) {
            page_settingsadvanced.style.opacity = "1";
        } else if (x == 0) {
            page_settingsadvanced.style.opacity = "0";
        }
}

function OptionResetSSC() {
    // Lose focus
    setTimeout(() => {
    const button__settingsadvanced_resetssc = document.querySelector('#button--settingsadvanced-resetssc');
    button__settingsadvanced_resetssc.blur();
    }, 200);
    // Function
    Interface_Page_SettingsAdvanced(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-resetssc/page-settings-option-resetssc.html";
     }, 500);
}

function OptionChangeSSC() {
    // Lose focus
    setTimeout(() => {
    button__settingsadvanced_changessc = document.querySelector('#button--settingsadvanced-changessc');
    button__settingsadvanced_changessc.blur();
    }, 200);
    // Function
    Interface_Page_SettingsAdvanced(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-changessc/page-settings-option-changessc.html";
     }, 500);
}

function OptionLocalReset() {
    // Lose focus
    setTimeout(() => {
    const button__settingsadvanced_localreset = document.querySelector('#button--settingsadvanced-localreset');
    button__settingsadvanced_localreset.blur();
    }, 200);
    // Function
}

function OptionTerminal() {
    // Lose focus
    setTimeout(() => {
    const button__settingsadvanced_terminal = document.querySelector('#button--settingsadvanced-terminal');
    button__settingsadvanced_terminal.blur();
    }, 200);
    // Function
}