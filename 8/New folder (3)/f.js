// let my=document.getElementById('sliceshow');
// // src="img/2.png"
// let img=["img/1.jpg" , "img/2.jpg" ,"img/3.jpg","img/4.jpg","img/5.jpg"];
// let i=0;
// my.setAttribute('src', img[i])

// function sliceshow(){
//     my.setAttribute('src',img[i])
//   i++;
//     if(i==5){
//     i=i-5
//   }
    

//     setTimeout(function(){
//         sliceshow()
//     } ,1000)
// }
// sliceshow();

// let s=document.getElementById("sew")

// let a =["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
// let i=0;
// s.setAttribute("src",a[i])

// function ahmed(){
// s.setAttribute("src",a[i])
// i++;

// setTimeout(function(){
//     ahmed()
// },2000)

// }
// ahmed();


let m =document.getElementById('sew')
let a =["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
let i =0;

m.setAttribute('src',a[i])
function ahmed(){
    m.setAttribute('src',a[i])
    i++
    setTimeout(function(){
  ahmed();
    },1000)



}
ahmed();