function Interface_Page_Logout(x) {
    Interface_Page_Lang();
    const page_logout = document.querySelector(".contents-page2");
        if (x == 1) {
            page_logout.style.opacity = "1";
        } else if (x == 0) {
            page_logout.style.opacity = "0";
        }
}

function Logout() {
    // Lose focus
    setTimeout(() => {
    const button__logout_logout = document.querySelector('#button--logout-logout');
    button__logout_logout.blur();
    }, 200);
    // Function
    Interface_Page_Logout(0);
    setTimeout(() => {
    window.location.href = "../page-cheatmenu/page-cheatmenu.html";
    }, 500);
}

function SaveAndLogout() {
    // Lose focus
    setTimeout(() => {
    const button__logout_save_and_logout = document.querySelector('#button--logout-save-and-logout');
    button__logout_save_and_logout.blur();
    }, 200);
    // Function
}

function Save() {
    // Lose focus
    setTimeout(() => {
    const button__logout_save = document.querySelector('#button--logout-save');
    button__logout_save.blur();
    }, 200);
    // Function
}

function Interface_Page_Lang() {
    const string_onpage_logout1 = document.querySelector("#string_onpage_logout1");
    const string_onpage_logout2 = document.querySelector("#string_onpage_logout2");
    const string_onpage_save1 = document.querySelector("#string_onpage_save1");
    const string_onpage_saveandlogout1 = document.querySelector("#string_onpage_saveandlogout1");
    const string_onpage_logout3 = document.querySelector("#string_onpage_logout3");
    const string_onpage_usersettings1 = document.querySelector("#string_onpage_usersettings1");
    const string_onpage_profile1 = document.querySelector("#string_onpage_profile1");
    const string_onpage_add1 = document.querySelector("#string_onpage_add1");
    const string_onpage_dashboard1 = document.querySelector("#string_onpage_dashboard1");

    string_onpage_logout1.innerHTML = string_logout1[localStorage.current_language];
    string_onpage_logout2.innerHTML = string_logout2[localStorage.current_language];
    string_onpage_save1.innerHTML = string_save1[localStorage.current_language];
    string_onpage_saveandlogout1.innerHTML = string_saveandlogout1[localStorage.current_language];
    string_onpage_logout3.innerHTML = string_logout1[localStorage.current_language];
    string_onpage_usersettings1.innerHTML = string_usersettings1[localStorage.current_language];
    string_onpage_profile1.innerHTML = string_profile1[localStorage.current_language];
    string_onpage_add1.innerHTML = string_add1[localStorage.current_language];
    string_onpage_dashboard1.innerHTML = string_dashboard1[localStorage.current_language];
}