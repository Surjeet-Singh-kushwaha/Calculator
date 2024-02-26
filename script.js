let string = ""
let display = document.querySelector(".Display")
let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML=="X"){
          
            display.innerHTML=string+"X"
            string+='*'
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1)
            display.innerHTML=string
        }
        else if(e.target.innerHTML=="AC"){
            string=''
            display.innerHTML=''
        }
       else if(e.target.innerHTML == '='){
            try{
            string = eval(string)
            display.innerHTML=string
            string =''
            }
            catch(e){
                display.innerHTML="SYNTAX ERROR"
                string =''
            }
        }
        else{
        string+=e.target.innerHTML
        display.innerHTML=string
        console.log(string)
        }
    })
    console.log(button.innerHTML)
})