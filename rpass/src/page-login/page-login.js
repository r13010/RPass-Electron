function Interface_Page_Login(x) {
    const page_login = document.querySelector(".contents-page1");
        if (x == 1) {
            page_login.style.opacity = "1";
        } else if (x == 0) {
            page_login.style.opacity = "0";
        }
}

function Login() {
    // Lose focus
    setTimeout(() => {
    const button__login_login = document.querySelector('#button--login-login');
    button__login_login.blur();
    }, 200);
    // Function
    Interface_Page_Login(0);
    setTimeout(() => { 
        window.location.href = "../page-cheatmenu/page-cheatmenu.html";
    }, 500);
}