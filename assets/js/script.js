const userForm = document.getElementById('user-form');
const formBoard = document.getElementById('form-board');
const dashboard = document.getElementById('dashboard');
const btnDown = document.getElementById('button-down');
const btnUp = document.getElementById('button-up')

var userScore = 0;

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
}

btnDown.addEventListener('click', pointsDown);

btnUp.addEventListener('click', pointsUp);

function pointsUp() {
    document.getElementById('userPoints').innerHTML = userScore += +1;
}

function pointsDown() {
    if(userScore > 0) {
        document.getElementById('userPoints').innerHTML = userScore += -1;
    }
}