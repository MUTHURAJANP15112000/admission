const slidepage=document.querySelector(".slidepage");
const firstNextBtn=document.querySelector(".nextBtn");
const prevBtnSec=document.querySelector(".prev-1");
const nextBtnSec=document.querySelector(".next-1");

const prevBtnThr=document.querySelector(".prev-2");
const nextBtnThr=document.querySelector(".next-2");


const prevBtnfour=document.querySelector(".prev-3");
const nextBtnfour=document.querySelector(".next-3");


const prevBtnfive=document.querySelector(".prev-4");
const nextBtnfive=document.querySelector(".next-4");





const submitBtn=document.querySelector(".submit");
firstNextBtn.addEventListener("click",function(){
    slidepage.style.marginLeft="-25%";
    document.querySelectorAll(".bullet")[0].style.backgroundColor="#d43f8d";
    document.querySelectorAll(".bullet")[0].style.color="#fff";

});

nextBtnSec.addEventListener("click",function(){
    slidepage.style.marginLeft="-50%";
    document.querySelectorAll(".bullet")[1].style.backgroundColor="#d43f8d";
    document.querySelectorAll(".bullet")[1].style.color="#fff";

});
nextBtnThr.addEventListener("click",function(){
    slidepage.style.marginLeft="-75%";
    document.querySelectorAll(".bullet")[2].style.backgroundColor="#d43f8d";
    document.querySelectorAll(".bullet")[2].style.color="#fff";

});
nextBtnfour.addEventListener("click",function(){
    slidepage.style.marginLeft="-100%";
    document.querySelectorAll(".bullet")[3].style.backgroundColor="#d43f8d";
    document.querySelectorAll(".bullet")[3].style.color="#fff";

});

prevBtnSec.addEventListener("click",function(){
    slidepage.style.marginLeft="0%";
    document.querySelectorAll(".bullet")[0].style.backgroundColor="antiquewhite";
    document.querySelectorAll(".bullet")[0].style.color="#000";

});

prevBtnThr.addEventListener("click",function(){
    slidepage.style.marginLeft="-25%";
    document.querySelectorAll(".bullet")[1].style.backgroundColor="antiquewhite";
    document.querySelectorAll(".bullet")[1].style.color="#000";

});
prevBtnfour.addEventListener("click",function(){
    slidepage.style.marginLeft="-50%";
    document.querySelectorAll(".bullet")[2].style.backgroundColor="antiquewhite";
    document.querySelectorAll(".bullet")[2].style.color="#000";

});
prevBtnfive.addEventListener("click",function(){
    slidepage.style.marginLeft="-75%";
    document.querySelectorAll(".bullet")[3].style.backgroundColor="antiquewhite";
    document.querySelectorAll(".bullet")[3].style.color="#000";

});
