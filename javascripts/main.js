// console.log("Why, hello there");
let runBefore = 0;

const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML += myInnerds;
};

const bringIt = () => {
  const user1 = document.getElementById("user-input-1").value.toLowerCase();
  xhr(user1, thisFunctionIfFileLoads);
  const user2 = document.getElementById("user-input-2").value.toLowerCase();
  xhr(user2, thisFunctionIfFileLoads);
};

const xhr = (firstCall, successFunction) => {
  const myFirstRequest = new XMLHttpRequest();
  myFirstRequest.addEventListener("load", successFunction);
  myFirstRequest.addEventListener("error", ifItFails);
  myFirstRequest.open("GET", `https://teamtreehouse.com/${firstCall}.json`);
  myFirstRequest.send()
};

function thisFunctionIfFileLoads(){
  const myUser = JSON.parse(this.responseText);
  const userImage = myUser.gravatar_url;
  const userName = myUser.profile_name;
  const userPoints = myUser.points.total;
  let userBadges = [];
  for(let n = 0; n < myUser.badges.length; n++){
    userBadges.push(myUser.badges[n].icon_url);
  };
  makePlayerCard(userImage, userName, userPoints, userBadges);
};

const makePlayerCard = (myUserImage, myUsername, myUserPoints, userBadges) => {
  let playerContainer = '';
  let firstPlayer = '';
  
    playerContainer += `<div class="panel panel-default col-sm-6 text-center" id="${myUsername}">`;
    playerContainer +=   `<div class="panel-heading">`;
    playerContainer +=     `<h3 class="panel-title">${myUsername}</h3>`;
    playerContainer +=   `</div>`;
    playerContainer +=   `<div class="panel-body">`;
    playerContainer +=     `<img src='${myUserImage}'>`;
    playerContainer +=     `<h3 id='${myUsername}-points'>${myUserPoints}</h3>`;
    playerContainer +=     `<p class='hidden' id='${myUsername}-badges'>${userBadges}</p>`;
    playerContainer +=   `</div>`;
    playerContainer += `</div>`;

    writeToDom(playerContainer, "player-box");
  
  runBefore++;

  if(runBefore === 2){
    declareWinner();
  };
};

function ifItFails(){
  console.log("I have failed, my friend.");
};

const initEventListeners = () => {
  document.getElementById("fight").addEventListener("click", bringIt);
};

const declareWinner = () => {
  const player1name = document.getElementById("user-input-1").value.toLowerCase();
  const player2name = document.getElementById("user-input-2").value.toLowerCase();
  let player1= document.getElementById(`${player1name}-points`).innerHTML;
  let player2= document.getElementById(`${player2name}-points`).innerHTML;
  let player1Badges = document.getElementById(`${player1name}-badges`).innerHTML;
  let player2Badges = document.getElementById(`${player2name}-badges`).innerHTML;
  let winnerName = '';
  let winningMessage = '';
  let winnerBox = document.getElementById("winnerBox").innerHTML;
  if(player1 > player2){
    winningMessage = `<h1 class='col-sm-6 col-sm-offset-3 text-center'>${player1name} wins!</h1>`;
    clearScreen();
    winnerName = player1name;
    createBadgeCarousel(player1Badges);
  }else{
    winningMessage = `<h1 class='col-sm-6 col-sm-offset-3 text-center'>${player2name} wins!</h1>`;
    winnerName = player2name;
    createBadgeCarousel(player2Badges);
  };
  writeToDom(winningMessage, "winnerBox");
};

const clearScreen = () => {
  document.getElementById('main-page-contents').classList.add('hidden');
};

const createBadgeCarousel = (badges) => {
  let myBadges = badges.split(',');
  let winnerBox = '';
  
  winnerBox += `<div class="badge-container">`;
  winnerBox += `<h3>Earned Badges:</h3>`;
  for(var i = 0 ; i < myBadges.length; i++){
    winnerBox += `<img src='${myBadges[i]}' class='badge-token'>`;  
  };
  winnerBox += `</div>`;
  writeToDom(winnerBox, "badgeBox");
};

const startApplication = () => {
  initEventListeners();
};

startApplication();
