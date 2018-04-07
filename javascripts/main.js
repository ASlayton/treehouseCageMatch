console.log("Why, hello there");

const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const bringIt = () => {
  const user1 = document.getElementById("user-input-1").value.toLowerCase();
  const user2 = document.getElementById("user-input-2").value.toLowerCase();
  xhr(user1, thisFunctionIfFileLoads);
  xhr(user2, thisFunctionIfFileLoads);
  document.addEventListener("DOMContentLoaded", declareWinner);
};

const xhr = (firstCall, successFunction) => {
  const myFirstRequest = new XMLHttpRequest();
  myFirstRequest.addEventListener("load", successFunction);
  myFirstRequest.addEventListener("error", ifItFails);
  myFirstRequest.open("GET", `https://www.teamtreehouse.com/${firstCall}.json`);
  myFirstRequest.send()
};

function thisFunctionIfFileLoads(){
  const myUser = JSON.parse(this.responseText);
  const userImage = myUser.gravatar_url;
  const userName = myUser.profile_name;
  const userPoints = myUser.points.total;
  makePlayerCard(userImage, userName, userPoints);
};

const makePlayerCard = (myUserImage, myUsername, myUserPoints) => {
  let playerContainer = '';
  let firstPlayer = document.getElementById('user-input-1').value.toLowerCase();
    playerContainer += `<div class="panel panel-default">`;
    playerContainer +=   `<div class="panel-heading">`;
    playerContainer +=     `<h3 class="panel-title">${myUsername}</h3>`;
    playerContainer +=   `</div>`;
    playerContainer +=   `<div class="panel-body">`;
    playerContainer +=     `<img src='${myUserImage}'>`;
    if(firstPlayer === myUsername){
      playerContainer +=     `<h3 id='user-1-points'>${myUserPoints}</h3>`;
    }else{
      playerContainer +=     `<h3 id='user-2-points'>${myUserPoints}</h3>`;
    };
    playerContainer +=   `</div>`;
    playerContainer += `</div>`;

  if(firstPlayer === myUsername){
    writeToDom(playerContainer, "player-1-container");
  }else{
    writeToDom(playerContainer, "player-2-container");
  };
};

function ifItFails(){
  console.log("I have failed, my friend.");
};

const fightButton = () => {
  document.getElementById("fight").addEventListener("click", bringIt);
};

const declareWinner = () => {
  document.getElementById("fight").classList.add("hidden");
  const player1 = document.getElementById('user-1-points').innerHTML;
  const player2 = document.getElementById('user-2-points').innerHTML;
  if(player1 > player2){
    console.log(`Player 1 wins with ${player1}`);
    playerName = document.getElementById()
  }else{
    console.log(`Player 1 wins with ${player2}`);
  };

  XHR();
};



const createBadgeCarousel = (badgeImageArray, badgeNameArray) => {
  const winnerBox = document.getElementById("winnerBox").innerHTML;
  winnerBox += `<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">`;
  winnerBox +=   `<div class="carousel-inner" role="listbox">`;
  winnerBox +=     `<div class="item active">`;
  winnerBox +=       `<img src="..." alt="...">`;
  winnerBox +=        `<div class="carousel-caption">`;
  winnerBox +=          `...`;
  winnerBox +=        `</div>`;
  winnerBox +=     `</div>`;
  
  for(let i = 1; i < badgeImageArray.length; i++){
    winnerBox +=     `<div class="item">`;
    winnerBox +=       `<img src="${badgeImageArray[i]}" alt="${badgeNameArray[i]}">`;
    winnerBox +=       `<div class="carousel-caption">`;
    winnerBox +=         `${badgeNameArray[i]}`;
    winnerBox +=       `</div>`;
    winnerBox +=     `</div>`;
    winnerBox +=   `</div>`;
  };
// controls
  winnerBox +=  ` <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">`;
  winnerBox +=  `   <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>`;
  winnerBox +=  `   <span class="sr-only">Previous</span>`;
  winnerBox +=  ` </a>`;
  winnerBox +=  ` <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">`;
  winnerBox +=  `   <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>`;
  winnerBox +=   `  <span class="sr-only">Next</span>`;
  winnerBox +=   `</a>`;
  winnerBox += `</div>`;
};

const startApplication = () => {
  fightButton();
};

startApplication();