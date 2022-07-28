function GoBack() {
    // Lose focus
    setTimeout(() => {
    const button__goback = document.querySelector('#button--goback');
    button__goback.blur();
    }, 200);
    // Function
    Interface_Page_SettingsAdvanced(0);
    setTimeout(() => { 
        window.location.href = "../page-settingsdefault/page-settingsdefault.html";
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

function OptionDefaultEnglish() {
    // Lose focus
    setTimeout(() => {
    const button__defaultlang_english = document.querySelector('#button--defaultlang-english');
    button__defaultlang_english.blur();
    }, 200);
    // Function
}

function OptionDefaultRomanian() {
    // Lose focus
    setTimeout(() => {
    const button__defaultlang_romanian = document.querySelector('#button--defaultlang-romanian');
    button__defaultlang_romanian.blur();
    }, 200);
    // Function
}