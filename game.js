let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-Btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let turn0=true;
const playerName1="Afzal";
const playerName2="Sahil";
const winpatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

boxes.forEach((box) => {
  box.addEventListener("click",() => {
    if(turn0) {
      box.innerText="X";
      box.style.color="green";
      turn0=false;
    } else {
      box.innerText="O";
      box.style.color="orange";
      turn0=true;
    }
    box.disabled=true;
    count++;
    
    let isWinner=checkWinner();
    if (count === 9 && !isWinner) {
      gamedraw();
    }
  });
});
const gamedraw=() => {
  msg.innerText='game was a draw.';
  msgcontainer.classList.remove("hide");
  disableboxes();
}

const disableboxes=() => {
  for(let box of boxes) {
    box.disabled=true;
  }
};
const enableboxes=() => {
  for(let box of boxes) {
    box.disabled=false;
    box.innerText="";
  }
};
const showWinner =(winner) => {
  const winnerName =winner==="O" ? playerName1:playerName2;
  msg.innerText = `Congratulations, the winner is ${winnerName}`;
  msg.style.color="black";
  msgcontainer.classList.remove("hide"); 
  
disableboxes();
}


let checkWinner=() => {
  for(let pattern of winpatterns) {
    let p1=boxes[pattern[0]].innerText;
    let p2=boxes[pattern[1]].innerText;
    let p3=boxes[pattern[2]].innerText;
    if(p1 !=""&&p2!=""&&p3!="") {
      if(p1===p2&&p2===p3){
        showWinner(p1);
        return true;
      
      }
    }

  }
};


const resetgame =() => {
  turn0=true;
  count=0;
  enableboxes();
  msgcontainer.classList.add("hide");  
};

newbtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);