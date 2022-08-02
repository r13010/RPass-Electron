function login() {
    window.location.href = "../page-login/page-login.html";
}

function dashboard() {
    window.location.href = "../page-dashboard/page-dashboard.html";
}

function enc_test() {
    const enc1 = document.querySelector("#enc1");
    const enc2 = document.querySelector("#enc2");
    const enc3 = document.querySelector("#enc3");
    const enc4 = document.querySelector("#enc4");

    enc4.value = Rencrypt(enc1.value, enc2.value, enc3.value);
}

function dec_test() {
    const dec1 = document.querySelector("#dec1");
    const dec2 = document.querySelector("#dec2");
    const dec3 = document.querySelector("#dec3");
    const dec4 = document.querySelector("#dec4");

    dec4.value = Rdecrypt(dec1.value, dec2.value, dec3.value);
}