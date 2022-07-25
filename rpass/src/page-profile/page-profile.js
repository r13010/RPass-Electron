function Interface_Page_Profile(x) {
    const page_profile = document.querySelector(".contents-page2");
        if (x == 1) {
            page_profile.style.opacity = "1";
            UserInfo_Fetch();
        } else if (x == 0) {
            page_profile.style.opacity = "0";
        }
}

function OpenSettings() {
    // Lose focus
    setTimeout(() => {
    const button__profile_seemore = document.querySelector('#button--profile-seemore');
    button__profile_seemore.blur();
    }, 200);
    // Function
    Interface_Page_Profile(0);
    const list = document.querySelectorAll('.list');
    const settings = document.querySelector('#settings');
    // Set Settings Tab as active
    list.forEach((item) =>
    item.classList.remove('active'));
    settings.classList.add('active');
    // Redirect
    setTimeout(() => { 
        window.location.href = "../page-settingsuser/page-settingsuser.html";
     }, 500);
}

let userinfo__stored_passwords = 70;
let string__stored_passwords = " stored passwords";
function UserInfo_Fetch() {
    const form_email = document.querySelector('#userinfo--stored-passwords')
    form_email.innerHTML = userinfo__stored_passwords + string__stored_passwords;
}