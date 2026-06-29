const display =document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const x=button.innerText;
        if(x=="C"){
            display.value="";
        }else if(x=="X"){
            display.value=display.value.slice(0,-1);
        }
        else if(x=="="){
            try{

                display.value=eval(display.value);
            }
            catch(error){
                display.value="Error";
                
            }
        }
        else if(display.value=="Error"){
            if(x=="1" ||  x=="2" || x=="3" || x=="4" || x=="5" || x=="6" || x=="7" || x=="8" || x=="9" || x=="0" ){
                display.value="";
                display.value+=x;
                
            }else{
                display.value="";
            }

        }
        
        else{
            display.value+=x;
        }



    });
});

