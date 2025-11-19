let currentPlayer = "X";

let victory = document.getElementById("victory");
let dancer = document.querySelector(".winner img");


function clickSound() {
    let audio = new Audio("computer-mouse-click-351398.mp3");
    audio.play();
}


function victorySound(){
    let audio = new Audio("loud-fanfare-trumpet-effect-01-412045.mp3");
    audio.play();
}

function checkWin (){
    let button1=document.getElementById(1);
    let button2=document.getElementById(2);
    let button3=document.getElementById(3);
    let button4=document.getElementById(4);
    let button5=document.getElementById(5);
    let button6=document.getElementById(6);
    let button7=document.getElementById(7);
    let button8=document.getElementById(8);
    let button9=document.getElementById(9);
    if (
        (button1.innerText === "X" && button2.innerText === "X" && button3.innerText === "X") ||
        (button4.innerText === "X" && button5.innerText === "X" && button6.innerText === "X") ||
        (button7.innerText === "X" && button8.innerText === "X" && button9.innerText === "X") ||
        (button1.innerText === "X" && button4.innerText === "X" && button7.innerText === "X") ||
        (button2.innerText === "X" && button5.innerText === "X" && button8.innerText === "X") ||
        (button3.innerText === "X" && button6.innerText === "X" && button9.innerText === "X") ||
        (button1.innerText === "X" && button5.innerText === "X" && button9.innerText === "X") ||
        (button3.innerText === "X" && button5.innerText === "X" && button7.innerText === "X")
    ) {
        // alert("Player X wins!");
        victorySound();
        victory.innerHTML="Player X is the Winner! 🎉";
        dancer.style.display="block";
    } else if (
        (button1.innerText === "0" && button2.innerText === "0" && button3.innerText === "0") ||
        (button4.innerText === "0" && button5.innerText === "0" && button6.innerText === "0") ||
        (button7.innerText === "0" && button8.innerText === "0" && button9.innerText === "0") ||
        (button1.innerText === "0" && button4.innerText === "0" && button7.innerText === "0") ||
        (button2.innerText === "0" && button5.innerText === "0" && button8.innerText === "0") ||
        (button3.innerText === "0" && button6.innerText === "0" && button9.innerText === "0") ||
        (button1.innerText === "0" && button5.innerText === "0" && button9.innerText === "0") ||
        (button3.innerText === "0" && button5.innerText === "0" && button7.innerText === "0")

    ) {
        // alert("Player 0 wins!");
        victorySound();
        victory.innerHTML="Player 0 is the Winner! 🎉";
        dancer.style.display="block";
    } else {
        return 0;
    }
}



//this code for turn between player X and player 0
 
for( let i=1; i<=9; i++){
    let button=document.getElementById(i);
    button.addEventListener("click",function(){
        if (button.innerText !== "") return;
        button.innerText = currentPlayer;
        clickSound(); 
        if (!checkWin()) {
            currentPlayer = currentPlayer === "X" ? "0" : "X";
        }

    } );
}



let reset=document.getElementById("reset");
reset.addEventListener("click",function(){
    for(let i=1; i<=9; i++){
        let button=document.getElementById(i);
        button.innerText=""; // Clear the button text
    }
    currentPlayer="X"; // Reset to player X
    victory.innerHTML="Welcome to my Tik Tac Toe game";
    dancer.style.display="none";
});



