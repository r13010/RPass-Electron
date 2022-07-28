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

function OptionDefaultLight() {
    // Lose focus
    setTimeout(() => {
    const button__defaulttheme_light = document.querySelector('#button--defaulttheme-light');
    button__defaulttheme_light.blur();
    }, 200);
    // Function
}

function OptionDefaultDark() {
    // Lose focus
    setTimeout(() => {
    const button__defaulttheme_dark = document.querySelector('#button--defaulttheme-dark');
    button__defaulttheme_dark.blur();
    }, 200);
    // Function
}