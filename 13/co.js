let btt =document.getElementById("bt")
let btt1 =document.getElementById("bt1")
let btt2 =document.getElementById("bt2")
let btt3 =document.getElementById("bt3")
let btt4 =document.getElementById("bt4")


let num =document.getElementById("num1")
let num11 =document.getElementById("num2")
let num22 =document.getElementById("num3")
let num33 =document.getElementById("num4")
let num44 =document.getElementById("num5")


btt.addEventListener('click',ahmed)
btt1.addEventListener('click',ahmed2)
btt2.addEventListener('click',ahmed3)
btt3.addEventListener('click',ahmed4)
btt4.addEventListener('click',ahmed5)



 let a=0
 let a1=0
 let a2=0
 let a3 =0
 let a4=0
 let a5=0
 let a6=0


function ahmed(){if(a=>0){
    a++
   }
    num.innerHTML=a
   
}

function ahmed2(){ if(a1=>0){
    a1++
   }
    num11.innerHTML=a1
  
}

function ahmed3(){   if(a2=>0){
    a2++
   }
    num22.innerHTML=a2
 
}

function ahmed4(){if(a3=>0){
    a3++
   }
    num33.innerHTML=a3
   
}

function ahmed5(){
    num44.innerHTML=(a+a1+a2+a3)*10+"  "+" = "+"  "+ "      مجموع الحسنات      "
             
}



