
const input=document.querySelector("input");
const addbtn=document.getElementById("Addbtn");
const taskbox=document.getElementById(".box3");

addbtn.addEventListener("click",()=>{

    const x=input.value.trim();
    console.log(x);
    
    if(input.value===""){
        console.log("empty");
        alert("PLEASE ENTER");
        return;
        
       
    }


});


