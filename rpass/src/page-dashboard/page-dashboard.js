function Interface_Page_Dashboard(x) {
    const page_dashboard = document.querySelector(".contents-page2");
        if (x == 1) {
            page_dashboard.style.opacity = "1";
        } else if (x == 0) {
            page_dashboard.style.opacity = "0";
        }
}

let passlist_number = 1;
let passlist_name = "pule";

function AddPassword() {
    AddListItem(passlist_number, passlist_name);
    passlist_number++;
}

function DeletePassword(number) {
    console.log("delete " + number);
}

function CopyPassword(number) {
    console.log("copy " + number);
}

function ShowPassword(number) {
    console.log("show " + number);
}

function AddListItem(number, name) {
    const ul = document.getElementById("pass-list");
    const li = document.createElement("li");
    const a = document.createElement("a");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");
    const icon1 = document.createElement("ion-icon");
    const icon2 = document.createElement("ion-icon");
    const icon3 = document.createElement("ion-icon");

    icon1.setAttribute("name", "add-outline");
    icon2.setAttribute("name", "trash-outline");
    icon3.setAttribute("name", "copy-outline");

    span1.appendChild(document.createTextNode("Password " + number)); // base
    span1.onclick = function() {
        ShowPassword(number);
        setTimeout(() => {
        this.blur();
        }, 200);
    }
    span1.classList.add("text");
    span1.setAttribute("tabindex", "1");

    //span2.appendChild(icon1); // label
    span2.innerHTML = number;
    span2.onclick = function() {
        ShowPassword(number);
        setTimeout(() => {
        this.blur();
        }, 200);
    }
    span2.classList.add("icon1");
    span2.setAttribute("tabindex", "1");

    span3.appendChild(icon2); // delete
    span3.onclick = function() {
        DeletePassword(number);
        setTimeout(() => {
        this.blur();
        }, 200);
    }
    span3.classList.add("icon2");
    span3.setAttribute("tabindex", "1");

    span4.appendChild(icon3); // copy
    span4.onclick = function() {
        CopyPassword(number);
        setTimeout(() => {
        this.blur();
        }, 200);
    }
    span4.classList.add("icon3");
    span4.setAttribute("tabindex", "1");

    a.appendChild(span1);
    a.appendChild(span2);
    a.appendChild(span3);
    a.appendChild(span4);
    li.appendChild(a);
    ul.appendChild(li);
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