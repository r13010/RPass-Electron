function ListHandler_OnPage_Loader() {
    let pass_counter = 0;
    while (passwordlist?.[pass_counter]?.[0]) {
        ListHandler_OnPage_Add(pass_counter, passwordlist[pass_counter][0])
        pass_counter++;
    }
}

function ListHandler_OnPage_Add(pass_number, pass_name) {
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

    span1.appendChild(document.createTextNode(pass_name)); // base
    span1.onclick = function() {
        ListHandler_OnPage_Show(pass_number);
        setTimeout(() => {
        this.blur();
        }, 200);
    }
    span1.classList.add("text");
    span1.setAttribute("tabindex", "1");

    //span2.appendChild(icon1); // label
    span2.innerHTML = pass_name.slice(0, 2);
    span2.onclick = function() {
        ListHandler_OnPage_Show(pass_number);
        setTimeout(() => {
        this.blur();
        }, 200);
    }
    span2.classList.add("icon1");
    span2.setAttribute("tabindex", "1");

    span3.appendChild(icon2); // delete
    span3.onclick = function() {
        ListHandler_OnPage_Delete(pass_number);
        setTimeout(() => {
        this.blur();
        }, 200);
    }
    span3.classList.add("icon2");
    span3.setAttribute("tabindex", "1");

    span4.appendChild(icon3); // copy
    span4.onclick = function() {
        ListHandler_OnPage_Copy(pass_number);
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

function ListHandler_OnPage_Delete(number) {
    console.log("delete " + number);
}

function ListHandler_OnPage_Copy(number) {
    console.log("copy " + number);
}

function ListHandler_OnPage_Show(number) {
    console.log("show " + number);
}

function Test_AddPassword() {
    ListHandler_OnPage_Add(1, "Spotify");
}