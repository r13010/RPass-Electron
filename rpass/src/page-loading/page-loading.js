function InterfaceShowLoading(x) {

    const backgroundbox = document.querySelector(".backgroundbox");
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    const rpassicon = document.querySelector(".rpassicon");

    if (x == 1) {

        rpassicon.style.opacity = "1";
        setTimeout(() => {  
            backgroundbox.style.opacity = "1"; 
            text1.style.opacity = "1";
        }, 1000);
    
        setTimeout(() => {  
            text2.style.opacity = "1"; 
        }, 1500);

    } else if (x == 0) {

        backgroundbox.style.opacity = "0";
        text1.style.opacity = "0";
        text2.style.opacity = "0";
        
        setTimeout(() => {  
            rpassicon.style.opacity = "0";
            //end
        }, 500);

    }    
}