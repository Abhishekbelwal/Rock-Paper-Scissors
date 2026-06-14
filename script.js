let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randIdx= Math.floor( Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
     msg.innerText="Game was draw.Play again!";
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if (userWin) {
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compscorepara.innerText=compScore;
         msg.innerText=`You Win! Comp ${compChoice} beats your ${userChoice}`;
          msg.style.backgroundColor="Red";
        
    }
}
const playGame=(userChoice)=>{
     console.log("user choice", userChoice);
     const compChoice=genCompChoice();
    console.log("comp choice", compChoice);
    if (userChoice==compChoice) {
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper" ? false:true;
        }else if (userChoice==="Paper") {
            userWin=compChoice==="Scissors" ? false : true;
        }else{
            userWin=compChoice==="Rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice => {
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
       
        playGame(userChoice) ;
    });
}));