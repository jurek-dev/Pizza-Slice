const userForm = document.getElementById('user-form');
const formBoard = document.getElementById('form-board');
const dashboard = document.getElementById('dashboard');
const btnDown = document.getElementById('button-down');
const btnUp = document.getElementById('button-up');

var userScore;

if(localStorage.score == undefined) {
    localStorage.score = 0;
    userScore = parseInt(localStorage.score);
}
else {
    userScore = parseInt(localStorage.score);
}

userForm.onsubmit = function(f) {
    f.preventDefault();
    const inputName = document.getElementById('user-name');
    const userName = inputName.value;

    userForm.reset();

    formBoard.style.display = "none";

    changeDashboard(userName);
}

function changeDashboard(userName) {
    dashboard.style.display = "block";
    document.getElementById('heading-username').innerHTML = userName;
    document.getElementById('userPoints').innerHTML = userScore;
}

btnDown.addEventListener('click', pointsDown);

btnUp.addEventListener('click', pointsUp);

function pointsUp() {
    if(userScore < 1000) {
        userScore += +1;
        localStorage.score = userScore;
        document.getElementById('userPoints').innerHTML = userScore;
    } else {
        console.log("O número não pode ser maior que 1000.")
    }
}

function pointsDown() {
    if(userScore > 0) {
        userScore += -1;
        localStorage.score = userScore;
        document.getElementById('userPoints').innerHTML = userScore;
    } else {
        console.log("O número não pode ser menor que 0.")
    }
}