// let a=document.getElementById("in")
// let pt=document.getElementById("pt")
// pt.addEventListener("click",asd)
// function asd (){
// if(pt.getAttribute('data-text') == "show"){
// a.setAttribute('type' , 'text')
// pt.setAttribute('data-text' , 'hide')
//     pt.innerHTML="Hide"
// }
// else{
//     a.setAttribute('type' , 'password')
// pt.setAttribute('data-text' , 'show')
//     pt.innerHTML=" Show "
// }

// }


let i =document.getElementById("int")
let p =document.getElementById("pt")

p.onclick =function() {
    if (p.getAttribute("data-text")=='show'){
        i.setAttribute('type','text')
        p.setAttribute('data-text' , 'hide')
        p.innerHTML='hide'
    }
    else{ i.setAttribute('type','password')
    p.setAttribute('data-text' , 'show')
    p.innerHTML='show'}
}






























