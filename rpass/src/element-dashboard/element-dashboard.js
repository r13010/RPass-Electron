let distroyed = 0;
function ChangePage(pageNumber) {
    distroyed++;
    setTimeout(() => {
        distroyed--;
        if (distroyed == 0) {
            //change tab
            if (pageNumber == 1) {
                distroyed = 0;
                window.location.href = "../page-dashboard/page-dashboard.html";
            } else if (pageNumber == 2) {
                distroyed = 0;
                window.location.href = "../page-createpassword/page-createpassword.html";
            } else if (pageNumber == 3) {
                distroyed = 0;
                window.location.href = "../page-profile/page-profile.html";
            } else if (pageNumber == 4) {
                distroyed = 0;
                window.location.href = "../page-settingsuser/page-settingsuser.html";
            } else if (pageNumber == 5) {
                distroyed = 0;
                window.location.href = "../page-logout/page-logout.html";
            }
        }
    }, 500);
}