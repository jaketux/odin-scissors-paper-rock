
        const scissorsButton = document.querySelector("#scissors-btn")
        const paperButton = document.querySelector("#paper-btn")
        const rockButton = document.querySelector("#rock-btn")
        const buttonsGroup = document.querySelectorAll("button")
        const humanScoreText = document.querySelector(".humanscore")
        const computerScoreText = document.querySelector(".computerscore")
        const outcomeText = document.querySelector(".outcometext")
        const resetButton = document.querySelector("#reset-btn")

        computerScore = 0;
        humanScore = 0;

        function resetGame(){
        computerScore=0;
        humanScore=0;
        outcomeText.textContent="";
        humanScoreText.textContent="0";
        computerScoreText.textContent="0";
        scissorsButton.disabled=false;
        rockButton.disabled=false;
        paperButton.disabled=false;
        }

        resetButton.addEventListener("click",resetGame)



        scissorsButton.addEventListener("click",function(e){
            const humanSelection = "Scissors";
            const computerSelection = getComputerChoice();

            function getComputerChoice(){
                let computerOptions = ["Scissors","Paper","Rock"]
                let randomNumber = Math.floor((Math.random()*3))
                let computerChoice = computerOptions[randomNumber]
                return computerChoice
            }     
            getComputerChoice();


            if (computerSelection === humanSelection) {
                outcomeText.textContent="It's a draw! You and the computer both chose " + humanSelection+ "."
            }   
            else if (humanSelection === "Scissors" && computerSelection === "Paper") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."; 
            } else if (humanSelection === "Paper" && computerSelection === "Rock") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            } else if (humanSelection === "Rock" && computerSelection === "Scissors") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            } else {
                computerScore++; outcomeText.textContent="You lost this round. You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            }
         
            computerScoreText.textContent=computerScore
            humanScoreText.textContent=humanScore
            
            if (computerScore === 5) {
                outcomeText.textContent="You lost the game! You chose "+humanSelection+" and the computer chose "+computerSelection+". Hit the Reset button to play again.";
                scissorsButton.disabled=true;
                rockButton.disabled=true;
                paperButton.disabled=true;
            } else if (humanScore===5){
                outcomeText.textContent="You won the game! You chose "+humanSelection+" and the computer chose "+computerSelection+". Hit the Reset button to play again.";
                scissorsButton.disabled=true;
                rockButton.disabled=true;
                paperButton.disabled=true;
            }
            
            
        })

        paperButton.addEventListener("click",function(e){
            const humanSelection = "Paper";
            const computerSelection = getComputerChoice();

            function getComputerChoice(){
                let computerOptions = ["Scissors","Paper","Rock"]
                let randomNumber = Math.floor((Math.random()*3))
                let computerChoice = computerOptions[randomNumber]
                return computerChoice
            }     
            getComputerChoice();

            if (computerSelection === humanSelection) {
                outcomeText.textContent="It's a draw! You and the computer both chose " + humanSelection+ "."
            }   
            else if (humanSelection === "Scissors" && computerSelection === "Paper") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."; 
            } else if (humanSelection === "Paper" && computerSelection === "Rock") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            } else if (humanSelection === "Rock" && computerSelection === "Scissors") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            } else {
                computerScore++; outcomeText.textContent="You lost this round. You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            }
         
            computerScoreText.textContent=computerScore
            humanScoreText.textContent=humanScore

            if (computerScore === 5) {
                outcomeText.textContent="You lost the game! You chose "+humanSelection+" and the computer chose "+computerSelection+". Hit the Reset button to play again.";
                scissorsButton.disabled=true;
                rockButton.disabled=true;
                paperButton.disabled=true;
            } else if (humanScore===5){
                outcomeText.textContent="You won the game! You chose "+humanSelection+" and the computer chose "+computerSelection+". Hit the Reset button to play again.";
                scissorsButton.disabled=true;
                rockButton.disabled=true;
                paperButton.disabled=true;
            }

        })

        rockButton.addEventListener("click",function(e){
            const humanSelection = "Rock";
            const computerSelection = getComputerChoice();


            function getComputerChoice(){
                let computerOptions = ["Scissors","Paper","Rock"]
                let randomNumber = Math.floor((Math.random()*3))
                let computerChoice = computerOptions[randomNumber]
                return computerChoice
            }     
            getComputerChoice();

            if (computerSelection === humanSelection) {
                outcomeText.textContent="It's a draw! You and the computer both chose " + humanSelection+ "."
            }   
            else if (humanSelection === "Scissors" && computerSelection === "Paper") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."; 
            } else if (humanSelection === "Paper" && computerSelection === "Rock") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            } else if (humanSelection === "Rock" && computerSelection === "Scissors") {
                humanScore++; outcomeText.textContent="You won this round! You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            } else {
                computerScore++; outcomeText.textContent="You lost this round. You chose "+humanSelection+" and the computer chose "+computerSelection+"."
            }
         
            computerScoreText.textContent=computerScore
            humanScoreText.textContent=humanScore

            if (computerScore === 5) {
                outcomeText.textContent="You lost the game! You chose "+humanSelection+" and the computer chose "+computerSelection+". Hit the Reset button to play again.";
                scissorsButton.disabled=true;
                rockButton.disabled=true;
                paperButton.disabled=true;
            } else if (humanScore===5){
                outcomeText.textContent="You won the game! You chose "+humanSelection+" and the computer chose "+computerSelection+". Hit the Reset button to play again.";
                scissorsButton.disabled=true;
                rockButton.disabled=true;
                paperButton.disabled=true;
            }

        })



        

