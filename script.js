let dropvar = 0;
function burger_openmenu(){
    if(dropvar == 0){
        var drop = document.getElementById('burger_dropdown');
    drop.style.opacity = 1;
    drop.style.height = "100%";
    drop.style.backgroundColor = "rgb(26, 26, 26)";
    drop.style.borderRadius = "0px 0px 0px 0px"
    dropvar = 1;

    var line1 = document.getElementById('burger_line1');
    line1.style.transform = "rotate(45deg)";
    line1.style.top = "11px";
    line1.style.filter = "none";
    line1.style.transition = "transform 0.5s, top 0.5s";

    var line2 = document.getElementById('burger_line2');
    line2.style.opacity = "0"
    line2.style.transition = "opacity 0s";

    var line3 = document.getElementById('burger_line3');
    line3.style.transform = "rotate(-45deg)";
    line3.style.top = "11px";
    line3.style.filter = "none";
    line3.style.transition = "transform 0.5s, top 0.5s";

    var burgercon = document.getElementById('burger_content');
    burgercon.style.opacity = 1;

    burgercon.style.transition = "opacity 0.5s";


    }else{
        var drop = document.getElementById('burger_dropdown');
        drop.style.height = "0px";
        drop.style.opacity = 0;
        drop.style.transition = "height 0.5s, opacity 0.5s";
    dropvar = 0;

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
    burgercon.style.transition = "opacity 0.5s";
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
