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

function ChangeUsername() {
    // Lose focus
    setTimeout(() => {
    const button__changeusername_change = document.querySelector('#button--changeusername-change');
    button__changeusername_change.blur();
    }, 200);
    // Function
}