const comp_pt =document.getElementById("comp");
const comp_res =document.getElementById("res");
const comp_Condittion =document.getElementById("con");

comp_pt.addEventListener("click" ,calcbBMI);
function calcbBMI(){             
    const hei = document.getElementById("hei").value/100;
    const wid = document.getElementById("wid").value;

    const BMIvalue =wid /((hei * hei));
    comp_res.value=BMIvalue;
    if(BMIvalue<18.5){
        comp_Condittion.innerText="under weight"

    }             
    else if(BMIvalue>18.5 && BMIvalue <= 24.9){
        comp_Condittion.innerText="normal weight"
    }             
    else if(BMIvalue>=25 && BMIvalue <= 29.5){
        comp_Condittion.innerText="over weight"
    }
    else if(BMIvalue>=30){
        comp_Condittion.innerText="obesity"
}
}
             