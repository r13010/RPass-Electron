function Interface_Page_CreateUser(x) {
    const page_createuser = document.querySelector(".contents-page2");
        if (x == 1) {
            page_createuser.style.opacity = "1";
        } else if (x == 0) {
            page_createuser.style.opacity = "0";
        }
}

function Continue() {
    // Lose focus
    setTimeout(() => {
    const button__createuser_continue = document.querySelector('#button--createuser-continue');
    button__createuser_continue.blur();
    }, 200);
    // Function
    Interface_Page_CreateUser(0)
    setTimeout(() => {
        window.location.href = "../page-createuser-stage-2/page-createuser-stage-2.html";
    }, 500);
}