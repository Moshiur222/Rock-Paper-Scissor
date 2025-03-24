let userScore = 0;
let compScore = 0;

let choises = document.querySelectorAll(".choise");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const GenCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame= () => {
    msg.innerText = "Game Was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Generae Computer Choise
    const compChoice = GenCompChoice();
    if (userChoice === compChoice){
        //draw conditions
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == ""){
           userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choises.forEach((choise) => {
    choise.addEventListener("click",() => {
        const userChoice = choise.getAttribute("id");
        playGame(userChoice);
    });
});