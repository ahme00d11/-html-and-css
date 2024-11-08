let title =document.querySelector('.title')
let turn = 'x'
let squares =[];
function ahmed(a1,a2,a3){
    title.innerHTML =`${squares[a1]} winner`
    document.getElementById('item'+a1).style.background = '#000';
    document.getElementById('item'+a2).style.background = '#000';
    document.getElementById('item'+a3).style.background = '#000';
    setInterval(function(){title.innerHTML += '.'},1000)
    setTimeout(function(){location.reload()},2000)
}
function winnner()
{
    for(let i=1;i<10;i++)
    {
      squares[i] = document.getElementById('item'+i).innerHTML
    }
    if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[3] !='')
    {
      ahmed(1,2,3)

    }
   else if(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[5] !='')
    {
        ahmed(4,5,6)
    }
    else if(squares[7]==squares[8]&&squares[8]==squares[9]&&squares[9] !='')
    {
        ahmed(7,8,9)
    }







    else if(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[9] !='')
    {
        ahmed(1,5,9)
    }

    else if(squares[3]==squares[5]&&squares[5]==squares[7]&&squares[7] !='')
    {
        ahmed(3,5,7)
 
    }

    else if(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[6] !='')
    {
        ahmed(3,6,9)
    }


    else if(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[5] !='')
    {
        ahmed(2,5,8)

    }


    else if(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[7] !='')
    {
        ahmed(1,4,7)
    }






}
function game(id)
{
    let element =document.getElementById(id)
    if(turn==='x' && element.innerHTML==''){
        element.innerHTML = 'x'
        turn='o'
        title.innerHTML='o'
    }
    else if(turn === 'o' && element.innerHTML==''){
        turn='x'
        title.innerHTML='x'
        element.innerHTML='o'
    }
    winnner();
}