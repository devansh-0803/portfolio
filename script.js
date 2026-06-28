
let btn1 =document.getElementById("btn1")

btn1.addEventListener("mouseenter",function(){
    
    let x=Math.floor(Math.random()*window.innerWidth);
    let y=Math.floor(Math.random()*window.innerHeight);
    btn1.style.left=x+"px";
    btn1.style.top=y+"px";


});


let b2 =document.getElementById("b2")

b2.addEventListener("mouseenter",function(){
    
    let x=Math.floor(Math.random()*window.innerWidth);
    let y=Math.floor(Math.random()*window.innerHeight);
    b2.style.left=x+"px";
    b2.style.top=y+"px";

});

let darkmode=false;
let Dark =document.getElementById("Dark");
console.log(Dark);
Dark.addEventListener("click",function(){
    darkmode=!darkmode;
    if(darkmode){
        console.log("DARK MODE ON");
        document.body.style.backgroundColor="black";
        


    }else{
        console.log("DARK MODE OFF");
        document.body.style.backgroundColor="white";
       




    }



});

