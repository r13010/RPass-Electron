function Interface_Page_Logout(x) {
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