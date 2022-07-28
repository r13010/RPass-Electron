function GoBack() {
    // Lose focus
    setTimeout(() => {
    const button__goback = document.querySelector('#button--goback');
    button__goback.blur();
    }, 200);
    // Function
    Interface_Page_SettingsAdvanced(0);
    setTimeout(() => { 
        window.location.href = "../page-settingsadvanced/page-settingsadvanced.html";
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

function ResetSSC() {
    // Lose focus
    setTimeout(() => {
    const button__resetssc_reset = document.querySelector('#button--resetssc-reset');
    button__resetssc_reset.blur();
    }, 200);
    // Function
}