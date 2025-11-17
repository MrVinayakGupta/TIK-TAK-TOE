let num=Math.random()*9;
num=Math.floor(num+1);
console.log(num);
let correntPlayer = null ;
// Changing tern between player X and player 0
function playerX() {
    let button = document.getElementById(num);
    button.innerText="X";
    currentPlayer = "X";
    return currentPlayer;
}
function player0(){
    let button = document.getElementById(num);
    if (button === ""){
        button.innerText="0";
    }
    currentPlayer = "0";
    return currentPlayer;
}
function playerTurn (){

}




//this code for turn between player X and player 0
 
for( let i=1; i<=9; i++){
    let button=document.getElementById(i);
     button.addEventListener("click",function(){
            
        if(button.innerText === "") {
            if(num % 2 === "") {
                playerX();
            } else {
                player0();
                // button.innerText = "X";
            }
            num = Math.floor(Math.random() * 9) + 1; // Get a new random number for the next turn
        }
    } );
}


let reset=document.getElementById("reset");
reset.addEventListener("click",function(){
    for(let i=1; i<=9; i++){
        let button=document.getElementById(i);
        button.innerText=""; // Clear the button text
    }
});
