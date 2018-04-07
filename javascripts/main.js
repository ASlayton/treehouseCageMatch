// console.log("Why, hello there");
let runBefore = false;

const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const bringItPlayer1 = () => {
  const user1 = document.getElementById("user-input-1").value.toLowerCase();
  xhr(user1, thisFunctionIfFileLoads);
};

const bringItPlayer2 = () => {
  const user2 = document.getElementById("user-input-2").value.toLowerCase();
  xhr(user2, thisFunctionIfFileLoads);
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
  let firstPlayer = '';
  if (runBefore === true){
    firstPlayer = document.getElementById('user-1-points').parentNode.parentNode.firstChild.firstChild.innerHTML;
  }else{
    firstPlayer = document.getElementById("user-input-1").value.toLowerCase();
  };
  console.log(firstPlayer);
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
  runBefore = true;
};

function ifItFails(){
  console.log("I have failed, my friend.");
};

const initEventListeners = () => {
  document.getElementById("fight").addEventListener("click", fightItOut);
  document.getElementById("enterPlayer1").addEventListener("click", bringItPlayer1);
  document.getElementById("enterPlayer2").addEventListener("click", bringItPlayer2);
};

const fightItOut = () => {
  const myElement = document.getElementById("winnerBox");
  myElement.innerHTML = "<img src='https://media1.tenor.com/images/27b088962a216e5e6ae03ca1b94b7356/tenor.gif?itemid=7391113'>";
  setTimeout(declareWinner(),5000);
  document.getElementById("fight").classList.add("hidden");
};

const declareWinner = () => {
  const player1 = document.getElementById('user-1-points').innerHTML;
  const player2 = document.getElementById('user-2-points').innerHTML;
  let winnerName = '';
  if(player1 > player2){
    winnerName = document.getElementById('user-1-points').parentNode.parentNode.firstChild.firstChild.innerHTML;
    // xhr(winnerName, displayWinner);
  }else{
    console.log(`Player 1 wins with ${player2}`);
    winnerName = document.getElementById('user-2-points').parentNode.parentNode.firstChild.firstChild.innerHTML;
    xhr(winnerName, displayWinner);
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