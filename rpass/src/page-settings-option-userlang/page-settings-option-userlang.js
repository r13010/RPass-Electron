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

function OptionUserEnglish() {
    // Lose focus
    setTimeout(() => {
    const button__userlang_english = document.querySelector('#button--userlang-english');
    button__userlang_english.blur();
    }, 200);
    // Function
}

function OptionUserRomanian() {
    // Lose focus
    setTimeout(() => {
    const button__userlang_romanian = document.querySelector('#button--userlang-romanian');
    button__userlang_romanian.blur();
    }, 200);
    // Function
}