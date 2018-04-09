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
console.log(userBadges);
  makePlayerCard(userImage, userName, userPoints, userBadges);
};

const makePlayerCard = (myUserImage, myUsername, myUserPoints, userBadges) => {
  let playerContainer = '';
  let firstPlayer = '';
  
    playerContainer += `<div class="panel panel-default" id="${myUsername}">`;
    playerContainer +=   `<div class="panel-heading">`;
    playerContainer +=     `<h3 class="panel-title">${myUsername}</h3>`;
    playerContainer +=   `</div>`;
    playerContainer +=   `<div class="panel-body">`;
    playerContainer +=     `<img src='${myUserImage}'>`;
    if(runBefore === 0){
      playerContainer +=     `<h3 id='${myUsername}-points'>${myUserPoints}</h3>`;
      playerContainer += `<ul class='hidden' id='${myUsername}-badges'>`;
    }else{
      playerContainer +=     `<h3 id='${myUsername}-points'>${myUserPoints}</h3>`;
    };
    playerContainer += `<ul class=''>`;
    for(var i = 0; i < userBadges.length; i++){
      playerContainer += `<li><img src='${userBadges[i]}'></li>`;
    };
    playerContainer += `</ul>`;
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
  console.log("I have reached declareWinner function");
  const player1name = document.getElementById("user-input-1").value.toLowerCase();
  const player2name = document.getElementById("user-input-2").value.toLowerCase();
  let player1= document.getElementById(`${player1name}-points`).innerHTML;
  let player2= document.getElementById(`${player2name}-points`).innerHTML;
  let player1Badges = document.getElementById(`${player1name}-badges`).innerHTML;
  let player2Badges = document.getElementById(`${player2name}-badges`).innerHTML;
  let winnerName = '';
  let winnerBox = document.getElementById("winner-box").innerHTML;
  if(player1 > player2){
    winnerBox += `<h1>${player1name} wins!</h1>`;
    // createBadgeCarousel(userBadges);
  }else{
    winnerBox += `<h1>${player2name} wins!</h1>`;
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