let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true;
    enable();
    msgcontainer.classList.add("hide");

}






boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("click");
        if(turnO){
        box.innerText="O";
        turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;  
        }
        box.disabled=true;

        checkwinner();
    });
});

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const showwinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
}



const checkwinner=()=>{
    for( let patterns of winningpatterns ){
        let posval1=boxes[patterns[0]].innerText;
        let posval2=boxes[patterns[1]].innerText;
        let posval3=boxes[patterns[2]].innerText;
      
        if(posval1!="" && posval2!="" && posval3!=""){
    if(posval1===posval2 && posval2===posval3){
        console.log("winner");
        showwinner(posval1);
    }
}
}
}


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);