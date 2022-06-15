
 // acitvate let's play button 
 const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        match.classList.add("fadeIn");

    });
};
const game = () => {
    let pScore = 0;
    let cScore = 0;
    let restart = document.getElementById('restart');
    let score = document.getElementById('score');
   

    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        restart.style.display = 'inline-block';
    
       
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        })
        // Computer's Options 
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                // Computer's Choice randomly generated
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
               
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    // update images
                    playerHand.src = `img/${this.textContent}.png`;
                    computerHand.src = `img/${computerChoice}.png`; 
                }, 2000);

                //Animation 
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    // update scores
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // check for Draw
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a Draw';
            return;
        }
        // check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.innerHTML = `Player Wins!`;
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // check for Paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
       
        // check for Scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = ' Player Wins';
                pScore++;
                updateScore();
                return;
            }   
        }

    }
     // Restart game
     function restartGame(){
        pScore = 0;
        cScore = 0;
        score.innerHTML = `
            <p> Player: 0</p>
            <p> Computer: 0</p>
        `;
    }
    startGame();
    playMatch();
    restart.addEventListener('click', restartGame);
};
game();
