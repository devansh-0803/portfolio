
const tasklist=document.querySelector(".task-list");
const text = document.getElementById("task-area");
const addbtn=document.getElementById("task-button");
addbtn.addEventListener("click",function(){
    tasklist.innerHTML+=`<p>${text.value}</p>`;
    if(text.value=""){
        text.value="ENTER something";
    }
    
    text.value="";


});


