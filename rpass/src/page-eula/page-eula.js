function Interface_Page_Eula(x) {
    const page_eula = document.querySelector(".contents-page2");
        if (x == 1) {
            page_eula.style.opacity = "1";
        } else if (x == 0) {
            page_eula.style.opacity = "0";
        }
}

function Agree() {
    // Lose focus
    setTimeout(() => {
    const button__eula_agree = document.querySelector('#button--eula-agree');
    button__eula_agree.blur();
    }, 200);
    // Function
    Interface_Page_Eula(0);
    setTimeout(() => {
        window.location.href = "../page-createuser-stage-1/page-createuser-stage-1.html";
    }, 500);
}

function Disagree() {
    // Lose focus
    setTimeout(() => {
    const button__eula_agree = document.querySelector('#button--eula-disagree');
    button__eula_agree.blur();
    }, 200);
    // Function
    Interface_Page_Eula(0);
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

function About() {
    // Lose focus
    setTimeout(() => {
    const button__eula_about = document.querySelector('#button--eula-about');
    button__eula_about.blur();
    }, 200);
    // Function
    Interface_Page_Eula(0);
    const list = document.querySelectorAll('.list1');
    const about = document.querySelector('#about');
    // Set Settings Tab as active
    list.forEach((item) =>
    item.classList.remove('active1'));
    about.classList.add('active1');
    // Redirect
    setTimeout(() => {
        window.location.href = "../page-settings-option-about/page-settings-option-about.html";
    }, 500);
}