function Interface_Page_SettingsUser(x) {
    const page_settingsuser = document.querySelector(".contents-page2");
        if (x == 1) {
            page_settingsuser.style.opacity = "1";
        } else if (x == 0) {
            page_settingsuser.style.opacity = "0";
        }
}

function OpenSettingsUserLanguage() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_lang = document.querySelector('#button--settingsuser-lang');
    button__settingsuser_lang.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-userlang/page-settings-option-userlang.html";
     }, 500);
}

function OpenSettingsUserTheme() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_theme = document.querySelector('#button--settingsuser-theme');
    button__settingsuser_theme.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-usertheme/page-settings-option-usertheme.html";
     }, 500);
}

function OpenSettingsUserGenerator() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_gen = document.querySelector('#button--settingsuser-gen');
    button__settingsuser_gen.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-gen/page-settings-option-gen.html";
     }, 500);
}

function OpenSettingsAbout2() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_about2 = document.querySelector('#button--settingsuser-about2');
    button__settingsuser_about2.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-about2/page-settings-option-about2.html";
     }, 500);
}

function OpenSettingsAccountinfo() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_accountinfo = document.querySelector('#button--settingsuser-accountinfo');
    button__settingsuser_accountinfo.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-accountinfo/page-settings-option-accountinfo.html";
     }, 500);
}

function OpenSettingsChangeUsername() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_changeUsername = document.querySelector('#button--settingsuser-changeusername');
    button__settingsuser_changeUsername.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-changeusername/page-settings-option-changeusername.html";
     }, 500);
}

function OpenSettingsChangePassword() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_changePassword = document.querySelector('#button--settingsuser-changepassword');
    button__settingsuser_changePassword.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-changepass/page-settings-option-changepass.html";
     }, 500);
}

function OpenSettingsChangeExport2() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_export2 = document.querySelector('#button--settingsuser-export2');
    button__settingsuser_export2.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-export2/page-settings-option-export2.html";
     }, 500);
}

function OpenSettingsAccountDelete() {
    // Lose focus
    setTimeout(() => {
    const button__settingsuser_accountDelete = document.querySelector('#button--settingsuser-accountdelete');
    button__settingsuser_accountDelete.blur();
    }, 200);
    // Function
    Interface_Page_SettingsUser(0);
    setTimeout(() => { 
        window.location.href = "../page-settings-option-accountdelete/page-settings-option-accountdelete.html";
     }, 500);
}
