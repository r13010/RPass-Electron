function Interface_Page_CreateUser(x) {
    const page_createuser = document.querySelector(".contents-page2");
        if (x == 1) {
            page_createuser.style.opacity = "1";
        } else if (x == 0) {
            page_createuser.style.opacity = "0";
        }
}

function Login() {
    // Lose focus
    setTimeout(() => {
    const button__createuser_redirectlogin = document.querySelector('#button--createacccount-redirectlogin');
    button__createuser_redirectlogin.blur();
    }, 200);
    // Function
    Interface_Page_CreateUser(0);
    const list = document.querySelectorAll('.list1');
    const login = document.querySelector('#login');
    // Set Settings Tab as active
    list.forEach((item) =>
    item.classList.remove('active1'));
    login.classList.add('active1');
    // Redirect
    setTimeout(() => {
        window.location.href = "../page-login/page-login.html";
    }, 500);
}

function Help() {
    // Lose focus
    setTimeout(() => {
    const button__createuser_redirecthelp = document.querySelector('#button--createacccount-redirecthelp');
    button__createuser_redirecthelp.blur();
    }, 200);
    // Function
}
