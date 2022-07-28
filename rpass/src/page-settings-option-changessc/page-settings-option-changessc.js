function GoBack() {
    // Lose focus
    setTimeout(() => {
    const button__goback = document.querySelector('#button--goback');
    button__goback.blur();
    }, 200);
    // Function
    Interface_Page_SettingsAdvanced(0);
    setTimeout(() => { 
        window.location.href = "../page-settingsadvanced/page-settingsadvanced.html";
     }, 500);
}

function Interface_Page_SettingsAdvanced(x) {
    const page_settingsadvanced = document.querySelector(".contents-page2");
        if (x == 1) {
            page_settingsadvanced.style.opacity = "1";
        } else if (x == 0) {
            page_settingsadvanced.style.opacity = "0";
        }
}

function ChangeSSC() {
    // Lose focus
    setTimeout(() => {
    const button__changessc_change = document.querySelector('#button--changessc-change');
    button__changessc_change.blur();
    }, 200);
    // Function
}

const form__changessc_1 = document.querySelector('#changessc--ssc-1');
const form__changessc_2 = document.querySelector('#changessc--ssc-2');
const form__changessc_3 = document.querySelector('#changessc--ssc-3');
const form__changessc_4 = document.querySelector('#changessc--ssc-4');
const form__changessc_5 = document.querySelector('#changessc--ssc-5');
const form__changessc_6 = document.querySelector('#changessc--ssc-6');
const form__changessc_7 = document.querySelector('#changessc--ssc-7');  
const form__changessc_8 = document.querySelector('#changessc--ssc-8');

function Clear() {
    // Lose focus
    setTimeout(() => {
    const button__resetssc_clear = document.querySelector('#button--changessc-clear');
    button__resetssc_clear.blur();
    }, 200);
    // Function
    form__changessc_1.value = "";
    form__changessc_2.value = "";
    form__changessc_3.value = "";
    form__changessc_4.value = "";
    form__changessc_5.value = "";
    form__changessc_6.value = "";
    form__changessc_7.value = "";
    form__changessc_8.value = "";
}

function Press1() {
    form__changessc_2.focus();
}

function Press2() {
    form__changessc_3.focus();
}

function Press3() {
    form__changessc_4.focus();
}

function Press4() {
    form__changessc_5.focus();
}

function Press5() {
    form__changessc_6.focus();
}

function Press6() {
    form__changessc_7.focus();
}

function Press7() {
    form__changessc_8.focus();
}

function Press8() {
    form__changessc_1.focus();
}