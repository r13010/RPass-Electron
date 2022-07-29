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
        window.location.href = "../page-createuser-stage-4/page-createuser-stage-4.html";
    }, 500);
}

const form__createacccount_ssc_1 = document.querySelector('#createacccount--ssc-1');
const form__createacccount_ssc_2 = document.querySelector('#createacccount--ssc-2');
const form__createacccount_ssc_3 = document.querySelector('#createacccount--ssc-3');
const form__createacccount_ssc_4 = document.querySelector('#createacccount--ssc-4');
const form__createacccount_ssc_5 = document.querySelector('#createacccount--ssc-5');
const form__createacccount_ssc_6 = document.querySelector('#createacccount--ssc-6');
const form__createacccount_ssc_7 = document.querySelector('#createacccount--ssc-7');  
const form__createacccount_ssc_8 = document.querySelector('#createacccount--ssc-8');

function Clear() {
    // Lose focus
    setTimeout(() => {
    const button__createacccount_ssc_clear = document.querySelector('#button--createacccount-ssc-clear');
    button__createacccount_ssc_clear.blur();
    }, 200);
    // Function
    form__createacccount_ssc_1.value = "";
    form__createacccount_ssc_2.value = "";
    form__createacccount_ssc_3.value = "";
    form__createacccount_ssc_4.value = "";
    form__createacccount_ssc_5.value = "";
    form__createacccount_ssc_6.value = "";
    form__createacccount_ssc_7.value = "";
    form__createacccount_ssc_8.value = "";
}

function Press1() {
    form__createacccount_ssc_2.focus();
}

function Press2() {
    form__createacccount_ssc_3.focus();
}

function Press3() {
    form__createacccount_ssc_4.focus();
}

function Press4() {
    form__createacccount_ssc_5.focus();
}

function Press5() {
    form__createacccount_ssc_6.focus();
}

function Press6() {
    form__createacccount_ssc_7.focus();
}

function Press7() {
    form__createacccount_ssc_8.focus();
}

function Press8() {
    form__createacccount_ssc_1.focus();
}

function Cancel() {
    // Lose focus
    setTimeout(() => {
    const button__createacccount_cancel = document.querySelector('#button--createacccount-cancel');
    button__createacccount_cancel.blur();
    }, 200);
    // Function
    Interface_Page_CreateUser(0)
    setTimeout(() => {
        window.location.href = "../page-createuser/page-createuser.html";
    }, 500);
}