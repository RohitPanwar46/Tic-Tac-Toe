console.log("well come to tic tac toe");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

// function to change the turn
const changeturn = ()=>{
    if (turn === "X") {
        return "O";
    }else{
        return "X";
    }
}

//function to cheack for a win
const cheackWin = ()=>{

    let boxes = document.querySelectorAll(".boxtext")

    let winpatters = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    for(const pattern of winpatters){
        if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText && boxes[pattern[1]].innerText !== ""){
            document.getElementsByClassName("info")[0].innerText = "Congratulation Winner Is " + boxes[pattern[0]].innerText;
            document.getElementsByClassName("boxtext").style.pointerEvents = "none";
            
        }
        
    }
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e => {
    let boxtext = e.querySelector(".boxtext")
    e.addEventListener("click",()=>{
        if (boxtext.innerText === "") {
            boxtext.innerText =turn;
            audioturn.play();
            turn = changeturn();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            cheackWin();
        }
    })
});

document.getElementById("reset").addEventListener("click",()=>{
    turn = "X";
    let boxtext = document.querySelectorAll(".boxtext");
    for (const e of boxtext) {
        e.innerText = ""
    }
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

})
    
