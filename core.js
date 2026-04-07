let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = {
        win: 0,
        lose: 0,
        tie: 0
    };
}

if (score.win == null) score.win = 0;
if (score.lose == null) score.lose = 0;
if (score.tie == null) score.tie = 0;

hideGameInfo();
updateScoreElement();

function gamePlay(playerMove) {

    showGameInfo();

    const computerPicked = computerMove();
    let results = '';

    if (playerMove === 'scissors') {

        if (computerPicked === 'rock') {
            results = 'You lose';
        } else if (computerPicked === 'paper') {
            results = 'You win';
        } else if (computerPicked === 'scissors') {
            results = 'A tie';
        }

    } else if (playerMove === 'paper') {

        if (computerPicked === 'rock') {
            results = 'You win';
        } else if (computerPicked === 'paper') {
            results = 'A tie';
        } else if (computerPicked === 'scissors') {
            results = 'You lose';
        }

    } else if (playerMove === 'rock') {

        if (computerPicked === 'rock') {
            results = 'A tie';
        } else if (computerPicked === 'paper') {
            results = 'You lose';
        } else if (computerPicked === 'scissors') {
            results = 'You win';
        }

    }

    if (results === 'You win') {
        score.win += 1;
    } else if (results === 'A tie') {
        score.tie += 1;
    } else if (results === 'You lose') {
        score.lose += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-results').innerHTML = `${results}`;
    document.querySelector('.js-MyMove').innerHTML =
        `you choose ${playerMove} - Computer ${computerPicked}`;

}

function updateScoreElement() {
    document.querySelector('.js-wins')
        .innerHTML = `wins:${score.win} lose:${score.lose} Tie:${score.tie}`;
}

function computerMove() {

    let randomNumber = Math.random();
    let computerPicked = '';

    if (randomNumber < 1 / 3) {
        computerPicked = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerPicked = 'paper';
    } else {
        computerPicked = 'scissors';
    }

    return computerPicked;

}

function hideGameInfo() {
    document.querySelector('.js-wins').style.display = 'none';
    document.querySelector('.js-results').style.display = 'none';
    document.querySelector('.js-MyMove').style.display = 'none';
}

function showGameInfo() {
    document.querySelector('.js-wins').style.display = 'block';
    document.querySelector('.js-results').style.display = 'block';
    document.querySelector('.js-MyMove').style.display = 'block';
}

