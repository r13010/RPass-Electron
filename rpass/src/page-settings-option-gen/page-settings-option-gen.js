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

function OptionGen16() {
    // Lose focus
    setTimeout(() => {
    const button__gen_16 = document.querySelector('#button--gen-16');
    button__gen_16.blur();
    }, 200);
    // Function
}

function OptionGen32() {
    // Lose focus
    setTimeout(() => {
    const button__gen_32 = document.querySelector('#button--gen-32');
    button__gen_32.blur();
    }, 200);
    // Function
}

function OptionGen64() {
    // Lose focus
    setTimeout(() => {
    const button__gen_64 = document.querySelector('#button--gen-64');
    button__gen_64.blur();
    }, 200);
    // Function
}

function OptionGen128() {
    // Lose focus
    setTimeout(() => {
    const button__gen_128 = document.querySelector('#button--gen-128');
    button__gen_128.blur();
    }, 200);
    // Function
}

function OptionGen256() {
    // Lose focus
    setTimeout(() => {
    const button__gen_256 = document.querySelector('#button--gen-256');
    button__gen_256.blur();
    }, 200);
    // Function
}

function OptionGen512() {
    // Lose focus
    setTimeout(() => {
    const button__gen_512 = document.querySelector('#button--gen-512');
    button__gen_512.blur();
    }, 200);
    // Function
}