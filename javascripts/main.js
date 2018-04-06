console.log("Why, hello there");

const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const fightButton = () => {
  document.getElementById("fight-button").addEventListener("click", bringIt);
};

const startApplication = () => {};

startApplication();