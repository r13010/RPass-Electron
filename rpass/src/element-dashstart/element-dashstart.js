let distroyed = 0;
function ChangePage(pageNumber) {
    distroyed++;
    setTimeout(() => {
        distroyed--;
        if (distroyed == 0) {
            //change tab
            if (pageNumber == 1) {
                distroyed = 0;
                window.location.href = "../page-login/page-login.html";
            } else if (pageNumber == 2) {
                distroyed = 0;
                window.location.href = "../page-createuser/page-createuser.html";
            } else if (pageNumber == 3) {
                distroyed = 0;
                window.location.href = "../page-settingsdefault/page-settingsdefault.html";
            }
        }
    }, 500);
}