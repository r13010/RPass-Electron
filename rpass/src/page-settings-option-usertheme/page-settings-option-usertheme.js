function GoBack() {
    // Lose focus
    setTimeout(() => {
    const button__goback = document.querySelector('#button--goback');
    button__goback.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settingsuser/page-settingsuser.html";
     }, 500);
}

function Interface_Page_SettingsUser(x) {
    const page_settingsuser = document.querySelector(".contents-page2");
        if (x == 1) {
            page_settingsuser.style.opacity = "1";
        } else if (x == 0) {
            page_settingsuser.style.opacity = "0";
        }
}

function OptionUserLight() {
    // Lose focus
    setTimeout(() => {
    const button__usertheme_light = document.querySelector('#button--usertheme-light');
    button__usertheme_light.blur();
    }, 200);
    // Function
}

function OptionUserDark() {
    // Lose focus
    setTimeout(() => {
    const button__usertheme_dark = document.querySelector('#button--usertheme-dark');
    button__usertheme_dark.blur();
    }, 200);
    // Function
}