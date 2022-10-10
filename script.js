function capitalize(str) {
    for (let i=0; i<=(str.length-1); i++) {
        if (i===0) {
            str=str.replace(str.charAt(i),str.charAt(i).toUpperCase())
        } else {
            str=str.replace(str.charAt(i),str.charAt(i).toLowerCase())
        }
    }
    return str
}

function getComputerChoice() {
    let choices = Array('Rock', 'Paper', 'Scissors');
    return choices[Math.floor(Math.random()*choices.length)]
}


function getPlayerChoice() {
    let nameOk=false;
    while (nameOk === false) { 
        let temporaryChoice = prompt('Choose a weapon:');
        if (!((capitalize(temporaryChoice) === 'Rock') || (capitalize(temporaryChoice) === 'Paper') || (capitalize(temporaryChoice) === 'Scissors'))) {
            alert ('Please choose between the following weapons : Rock, Paper or Scissors.');
            continue;
        } else {
            nameOk===true;
            return capitalize(temporaryChoice); 
        }
    }
}

const round = document.querySelector('.round')
let scoreuser = document.querySelector('.user')
let scorecomputer = document.querySelector('.computer')
let userScore = 0
let computerScore=0
scorecomputer.textContent = 'Computer : ' +computerScore;
scoreuser.textContent = 'User : '+userScore;

let numberGames=0



function playRound(playerSelection,computerSelection) {

    if (playerSelection === computerSelection) {
        round.textContent='It\'s a tie' ;
    } else if (playerSelection === 'Paper') {

        if (computerSelection === 'Rock') {
            round.textContent ='You won this round! :)';
            userScore +=1;
            scoreuser.textContent = 'User : '+userScore;

        } else if (computerSelection === 'Scissors') {
            round.textContent ='You lost this round... :(';
            computerScore +=1;
            scorecomputer.textContent = 'Computer : ' +computerScore;
        }
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            round.textContent = 'You won this round! :)';
            userScore +=1;
            scoreuser.textContent = 'User : '+userScore;

        } else if (computerSelection === 'Paper') {
            round.textContent = 'You lost this round... :(';
            computerScore +=1;
            scorecomputer.textContent = 'Computer : ' +computerScore;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            round.textContent= 'You won this round! :)';
            userScore +=1;
            scoreuser.textContent = 'User : '+userScore;

         } else if (computerSelection === 'Rock') {
            round.textContent= 'You lost this round... :(';
            computerScore +=1;
            scorecomputer.textContent = 'Computer : ' +computerScore;
        }
    }
}


function game() {
    let userWins = 0;
    let computerWins = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection=getPlayerChoice();
        let computerSelection=getComputerChoice();
        console.log(playRound(playerSelection,computerSelection))
        if (playRound(playerSelection,computerSelection)=='You lost this round... :(') {
            computerWins+=1
        } else if (playRound(playerSelection,computerSelection)=='You won this round! :)') {
            userWins+=1
        }
        console.log(playerSelection,computerSelection,userWins,computerWins)
    }
    if (userWins > computerWins) {
        return 'The score is '+ userWins + ' to ' + computerWins +' ! You won more rounds, congratulations!'
    } else if (userWins < computerWins) {
        return 'The score is '+ computerWins + ' to ' + userWins +' ! You won fewer rounds, sorry...'
    }
}

//console.log(game())

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('click')
}

function playround_one_arg(playerSelectionfromclick) {
    if (winner.classList[1]!='winner') {
        let computerSelection = getComputerChoice();
        const choicediv = document.querySelector('.print');
        choicediv.textContent =computerSelection;
        let playerSelection = playerSelectionfromclick;
        return playRound(playerSelection,computerSelection);
    };
}


const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('mouseenter', function (e) {
        e.target.classList.add('hover');
    });
    button.addEventListener('mouseout', function (e) {
        e.target.classList.remove('hover');
    });
    button.addEventListener('mousedown', function (e) {
        e.target.classList.add('click');
    });
    button.addEventListener('mouseup', function (e) {
        e.target.classList.remove('click');
    });
    button.addEventListener('mouseup',endgame);

});

const rock = document.querySelector('.rock');
rock.addEventListener('click', function(){(playround_one_arg('Rock'))});
const paper = document.querySelector('.paper');
paper.addEventListener('click', function(){(playround_one_arg('Paper'))});
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function(){(playround_one_arg('Scissors'))});

let nbgames = document.querySelector('.games');

let winner = document.querySelector('.final')

let tryAgain= document.createElement('div')



function endgame() {
    if (numberGames<5) {
        numberGames+=1;
        nbgames.textContent = numberGames;
    }
    if (numberGames==5) {
        if (userScore> computerScore) {
            winner.classList.add('winner');
            winner.textContent='You won! :)';
            tryAgain.classList.add('again');
            tryAgain.textContent='Click here to play again!'
            winner.appendChild(tryAgain);
            console.log(winner.classList,tryAgain.classList)
        } else if(computerScore>userScore) {
            winner.classList.add('winner');
            winner.textContent='You lost! :(';
            tryAgain.classList.add('again')
            tryAgain.textContent='Click here to play again!'
            winner.appendChild(tryAgain);

            console.log(winner.classList,tryAgain.classList)

        } else {
            winner.classList.add('winner');
            winner.textContent='It\'s a tie!';
            tryAgain.classList.add('again')
            tryAgain.textContent='Click here to play again!'
            console.log(winner.classList,tryAgain.classList)
            winner.appendChild(tryAgain);


        }    
        nbgames.textContent = numberGames;
        scorecomputer.textContent = 'User : '+userScore;
        scoreuser.textContent = 'Computer : '+computerScore;
        console.log(numberGames,computerScore,userScore)

    } 
}

function removeResult() {
    winner.textContent='';
    numberGames=0;
    userScore=0;
    computerScore=0;
    tryAgain.textContent='';
    nbgames.textContent=numberGames;
    scorecomputer.textContent = userScore;
    scoreuser.textContent = computerScore;
    winner.classList.remove('winner');
    tryAgain.classList.remove('again');
}

function addRemoveHover(bool) {
    if (bool) {
        winner.classList.add('hover')
    } else {
        winner.classList.remove('hover')
    }
}

winner.addEventListener('mouseenter', function (e) {
    e.target.classList.add('hover');
},);

winner.addEventListener('mouseout', function (e) {
    e.target.classList.remove('hover');
});

tryAgain.addEventListener('mouseenter', function () {(addRemoveHover(true))},true);

tryAgain.addEventListener('mouseout', function () {(addRemoveHover(false))},true);

winner.addEventListener('click',removeResult);

