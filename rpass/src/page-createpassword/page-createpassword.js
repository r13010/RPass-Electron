function Interface_Page_CreatePassword(x) {
    const page_createpassword = document.querySelector(".contents-page2");
        if (x == 1) {
            page_createpassword.style.opacity = "1";
        } else if (x == 0) {
            page_createpassword.style.opacity = "0";
        }
}

function Clear() {
    // Lose focus
    setTimeout(() => {
    const button__createpass_clear = document.querySelector('#button--createpass-clear');
    button__createpass_clear.blur();
    }, 200);
    // Function
    const form__newpassword_name = document.querySelector('#createpass--newpass-name');
    form__newpassword_name.value = "";
    const form__newpassword_newname = document.querySelector('#createpass--newpass-newname');
    form__newpassword_newname.value = "";
    const form__newpassword_newpass = document.querySelector('#createpass--newpass-newpass');
    form__newpassword_newpass.value = "";
    const form__newpassword_link = document.querySelector('#createpass--newpass-link');
    form__newpassword_link.value = "";
    const form__newpassword_desc = document.querySelector('#createpass--newpass-desc');
    form__newpassword_desc.value = "";
}

function Save() {
    // Lose focus
    setTimeout(() => {
    const button__createpass_save = document.querySelector('#button--createpass-save');
    button__createpass_save.blur();
    }, 200);
    // Function

}

function Generate() {
    // Lose focus
    setTimeout(() => {
    const button__createpass_gen = document.querySelector('#button--createpass-gen');
    button__createpass_gen.blur();
    }, 200);
    // Function
}