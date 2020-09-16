let lietus=document.querySelectorAll(".lietus");
let kelyje = document.querySelectorAll(".kelyje");
let m1 = document.querySelectorAll(".m1");
let power = document.querySelectorAll(".power");
let logo=document.getElementById("logoPlayer");
let fm=document.getElementById("fmPlayer");
for(let i=0; i<lietus.length; i++){
    lietus[i].addEventListener("click", function(){
        logo.src = "img/lietus.jpg";
        fm.src = "http://radio.m-1.fm/LIETUS";
    })
}
for(let i=0; i<kelyje.length; i++){
    kelyje[i].addEventListener("click", function(){
        logo.src = "img/kelyje.jpg";
        fm.src = "http://82.135.234.195:8000/kelyje_kaunas.mp3";
    })
}
for(let i=0; i<m1.length; i++){
    m1[i].addEventListener("click", function(){
        logo.src = "img/m1.png";
        fm.src = "http://radio.m-1.fm/M-1M";
    })
}
for(let i=0; i<power.length; i++){
    power[i].addEventListener("click", function(){
        logo.src = "img/power.jpg";
        fm.src = "http://94.101.239.3:8000/PHR.mp3";
    })
}
