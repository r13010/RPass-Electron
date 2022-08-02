function Interface_Page_Dashboard(x) {
    const page_dashboard = document.querySelector(".contents-page2");
        if (x == 1) {
            page_dashboard.style.opacity = "1";
        } else if (x == 0) {
            page_dashboard.style.opacity = "0";
        }
}

const button__dashboard_top = document.querySelector('#button--dashboard-top');
window.onscroll = function() {ScrollControl()};
function ScrollControl() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button__dashboard_top.style.opacity = "1";
    button__dashboard_top.visibility = "visible";
  } else {
    button__dashboard_top.style.opacity = "0";
    button__dashboard_top.visibility = "hidden";
  }
}

function ScrollTop() {
  // Lose focus
  setTimeout(() => {
  button__dashboard_top.blur();
  }, 200);
  // Function
  window.scrollTo({top: 0, behavior: 'smooth'});
}