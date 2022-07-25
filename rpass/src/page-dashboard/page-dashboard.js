function Interface_Page_Dashboard(x) {
    const page_dashboard = document.querySelector(".contents-page2");
        if (x == 1) {
            page_dashboard.style.opacity = "1";
        } else if (x == 0) {
            page_dashboard.style.opacity = "0";
        }
}