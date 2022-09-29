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


function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie';
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return 'You won this round! :)';
        } else if (computerSelection === 'Scissors') {
            return 'You lost this round... :(';
        }
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return 'You won this round! :)';
        } else if (computerSelection === 'Paper') {
            return 'You lost this round... :(';
        }
    } else if (playerSelection=== 'Scissors') {
        if (computerSelection === 'Paper') {
            return 'You won this round! :)';
        } else if (computerSelection === 'Rock') {
            return 'You lost this round... :(';
        }
    }
}

function game() {
    let userWins=0;
    let computerWins=0
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

function iamtrying(blah) {
    let computerSelection = getComputerChoice();
    let playerSelection = blah;
    return playRound(playerSelection,computerSelection);
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
});

const rock = document.querySelector('.rock');
rock.addEventListener('click', function(){alert(iamtrying('Rock'))})
const paper = document.querySelector('.paper');
paper.addEventListener('click', function(){alert(iamtrying('Paper'))})
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function(){alert(iamtrying('Scissors'))})

