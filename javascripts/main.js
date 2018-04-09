// console.log("Why, hello there");
let runBefore = 0;

const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const bringIt = () => {
  const user1 = document.getElementById("user-input-1").value.toLowerCase();
  xhr(user1, thisFunctionIfFileLoads);
  const user2 = document.getElementById("user-input-2").value.toLowerCase();
  xhr(user2, thisFunctionIfFileLoads);
};

const xhr = (firstCall, successFunction) => {
  console.log(firstCall);
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
  let userBadges =[];
  for(let n = 0; n < myUser.badges.length; n++){
    userBadges.push(myUser.badges.icon_url);
  };

  makePlayerCard(userImage, userName, userPoints, userBadges);
};

const makePlayerCard = (myUserImage, myUsername, myUserPoints, userBadges) => {
  let playerContainer = '';
  let firstPlayer = '';
  if (runBefore === 1){
    firstPlayer = document.getElementById('user-1-points').parentNode.parentNode.firstChild.firstChild.innerHTML;
  }else{
    firstPlayer = document.getElementById("user-input-1").value.toLowerCase();
  };
    playerContainer += `<div class="panel panel-default">`;
    playerContainer +=   `<div class="panel-heading">`;
    playerContainer +=     `<h3 class="panel-title" id="${myUsername}">${myUsername}</h3>`;
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
  if(runBefore === 2){
    declareWinner();
  };
  runBefore++;
};

function ifItFails(){
  console.log("I have failed, my friend.");
};

const initEventListeners = () => {
  document.getElementById("fight").addEventListener("click", bringIt);
};

const declareWinner = () => {
  console.log("I have reached declareWinner function");
  const player1 = document.getElementById('user-1-points').innerHTML;
  const player2 = document.getElementById('user-2-points').innerHTML;
  let winnerName = '';
  if(player1 > player2){
    winnerName = document.getElementById('user-1-points').parentNode.parentNode.firstChild.firstChild.innerHTML;
    console.log(winnerName);
  }else{
    winnerName = document.getElementById('user-2-points').parentNode.parentNode.firstChild.firstChild.innerHTML;
  };
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
  initEventListeners();
};

startApplication();