const userForm = document.getElementById('user-form');
var userScore = 0;

userForm.onsubmit = function(f) {
    f.preventDefault();
    const inputName = document.getElementById('user-name');
    const userName = inputName.value;

    console.log('tudo certo, ' + userName);
    userForm.reset();

    const section = document.getElementById('form');
    section.style.display = "none";

    createDashboard(userName);
}

function createDashboard(userName) {
    const dashboard = document.createElement('section');
    const userHeading = document.createElement('h1');
    const userParagh = document.createElement('p');
    const userNameNode = document.createTextNode(userName);
    const headingPoints = document.createElement('span');
    const btnMore = document.createElement('button');
    const btnLess = document.createElement('button');

    userHeading.appendChild(userNameNode);
    userParagh.appendChild(document.createTextNode("Seu placar é de:"));
    headingPoints.appendChild(document.createTextNode("0"));
    headingPoints.setAttribute('id', 'idPoints');

    btnMore.appendChild(document.createTextNode("+"));
    btnMore.setAttribute('id', 'btnMore');
    btnMore.setAttribute('onclick', 'pointsUp()');

    btnLess.appendChild(document.createTextNode("-"));
    btnLess.setAttribute('id', 'btnLess');
    btnLess.setAttribute('onclick', 'pointsDown()');

    dashboard.appendChild(userHeading);
    dashboard.appendChild(userParagh);
    dashboard.appendChild(btnLess);
    dashboard.appendChild(headingPoints);
    dashboard.appendChild(btnMore);

    document.body.append(dashboard);
}

function pointsUp() {
    document.getElementById('idPoints').innerHTML = userScore += +1;
}

function pointsDown() {
    document.getElementById('idPoints').innerHTML = userScore += -1;
}