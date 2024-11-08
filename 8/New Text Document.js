var input =document.getElementById("input")
var pt =document.getElementById("pt")
var p=document.getElementById("p")

pt.addEventListener("click",ahmed)

function ahmed(){
    var num = input.value
    p.innerHTML = num
    input.value=""
    if(num == ""){
        p.innerHTML = "error"
 
    }
    else if(num !=" " ){
    }
  
}

