window.addEventListener("scroll", function(){
    var header = document.getElementsByClassName("navbar") [0]
    header.classList.toggle("sticky", window.scrollY > 0);
    header.style.transition = "0.7s";
})










window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        const blackbox = document.getElementById('blackbox');
        loader.style.display = 'none';
        blackbox.style.display = 'none';
    }, 500); // 1000 Millisekunden (1 Sekunde) Verzögerung
});










let dropvar = 0;
function burger_openmenu(){
    if(dropvar == 0){
        var drop = document.getElementById('burger_dropdown');
    drop.style.opacity = 1;
    drop.style.height = "100%";
    drop.style.backgroundColor = "rgb(26, 26, 26)";
    drop.style.borderRadius = "0px 0px 0px 0px";
    dropvar = 1;

    var logo = document.getElementById('logohead');
    logo.style.opacity = 1;
    logo.style.bottom = "20px";
    logo.style.transition = "opacity 1s";

    var line1 = document.getElementById('burger_line1');
    line1.style.transform = "rotate(45deg)";
    line1.style.top = "11px";
    line1.style.filter = "none";
    line1.style.transition = "transform 0.5s, top 0.5s";

    var line2 = document.getElementById('burger_line2');
    line2.style.opacity = "0";
    line2.style.transition = "opacity 0s";

    var line3 = document.getElementById('burger_line3');
    line3.style.transform = "rotate(-45deg)";
    line3.style.top = "11px";
    line3.style.filter = "none";
    line3.style.transition = "transform 0.5s, top 0.5s";

    var burgercon = document.getElementById('burger_content');
    burgercon.style.opacity = 1;
    burgercon.style.display = "block";
    burgercon.style.transition = "opacity 0.5s";

    var itm1 = document.getElementById('burger_itm1');
    var itm2 = document.getElementById('burger_itm2');
    var itm3 = document.getElementById('burger_itm3');
    var itm4 = document.getElementById('burger_itm4');
    itm1.style.width = "100%";
    itm2.style.width = "100%";
    itm3.style.width = "100%";
    itm4.style.width = "100%";
    

    var menu = document.getElementById('burger_menu');
    menu.style.height = "305px";
    menu.style.width = "90%";
    


    }else{
        var drop = document.getElementById('burger_dropdown');
        drop.style.height = "0px";
        drop.style.opacity = 0;
        drop.style.transition = "height 0.5s, opacity 0.5s";
    dropvar = 0;

    var logo = document.getElementById('logohead');
    logo.style.opacity = 0;
    logo.style.bottom = "-200px";
    logo.style.transition = "opacity 0s";

    var line1 = document.getElementById('burger_line1');
    line1.style.transform = "rotate(0deg)";
    line1.style.top = "0px";
    line1.style.right = "0px";
    line1.style.filter = "drop-shadow(1px 1px 2px black)";
    line1.style.transition = "transform 0.5s, top 0.5s";

    var line2 = document.getElementById('burger_line2');
    line2.style.opacity = "1"
    line2.style.transition = "opacity 0.5s";

    var line3 = document.getElementById('burger_line3');
    line3.style.transform = "rotate(0deg)";
    line3.style.top = "20px";
    line3.style.right = "0px";
    line3.style.filter = "drop-shadow(1px 1px 2px black)";
    line3.style.transition = "transform 0.5s, top 0.5s";
    
    var burgercon = document.getElementById('burger_content');
    burgercon.style.opacity = 0;
    burgercon.style.display = "none";
    burgercon.style.transition = "opacity 0.5s";

    var menu = document.getElementById('burger_menu');
    menu.style.height = "25px";
    menu.style.width = "40px";
    menu.style.right = "10px";

    var itm1 = document.getElementById('burger_itm1');
    var itm2 = document.getElementById('burger_itm2');
    var itm3 = document.getElementById('burger_itm3');
    var itm4 = document.getElementById('burger_itm4');
    itm1.style.width = "0";
    itm2.style.width = "0";
    itm3.style.width = "0";
    itm4.style.width = "0";
    }



}

var dropped = 0;
function drop(){
    var navdrop = document.getElementById('nav_nav');
    navdrop.style.height = '100px';
    navdrop.style.transition = "all 0.5s";
    dropped = 1;
    
}



function up(){
    dropped = 0;
    var navdrop = document.getElementById('nav_nav');
    navdrop.style.height = '70px';
    navdrop.style.transition = "all 0.5s";
    
}


let num = 20;


function textsizebig(){
    let sizer = document.getElementById('r001-anleitung');
    if (num <= 60){
        val = num += 3;
        val = val + "px";
        sizer.style.fontSize = val;
    }


}

function textsizesmall(){
    let sizer = document.getElementById('r001-anleitung');
    if (num >= 10){
        val = num -= 3;
        val = val + "px";
        sizer.style.fontSize = val;
    }


    }


