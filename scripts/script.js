// ========== LEVEL CONFIG ==========
var levels = [
  { name: "Level 1", playerLife: 20, hackerLife: 10 },
  { name: "Level 2", playerLife: 20, hackerLife: 20},
  { name: "Level 3", playerLife: 20, hackerLife: 30 }
];

var currentLevel = 0; // start at level 0 (Level 1)

// ========== MESSAGES ==========
var hackerWinnerMessage = "Game over: You got hacked!";
var playerWinnerMessage = "You defeated the hacker!";

// ========== GAME STATE ==========
var playerLife;
var hackerLife;
var playerStartLife;
var hackerStartLife;
var roundFinished = false;
var cardSelected = false;

// ========== INIT GAME ==========
function initGame(levelIndex) {
  currentLevel = levelIndex || 0;

  var levelConfig = levels[currentLevel];
  playerLife = levelConfig.playerLife;
  hackerLife = levelConfig.hackerLife;
  playerStartLife = playerLife;
  hackerStartLife = hackerLife;

  roundFinished = false;
  cardSelected = false;

  updateScores();
  document.querySelector(".game-board").classList.add("before-game");
  document.querySelector(".winner-section").style.display = "none";

  // Reset card visibility and classes
  var allCardElements = document.querySelectorAll(".card");
  allCardElements.forEach(card => {
    card.style.display = "none";
    card.className = "card " + (card.classList.contains("player-card") ? "player-card" : "hacker-card");
  });

  // Attach click handlers again if needed
  allCardElements.forEach(card => {
    if(card.classList.contains("player-card")) {
      card.onclick = () => cardClicked(card);
    }
  });
}

// ========== CARD CLICK HANDLER ==========
function cardClicked(cardEl) {
  if(cardSelected) return;
  cardSelected = true;

  cardEl.classList.add("played-card");
  document.querySelector(".game-board").classList.add("card-selected");

  setTimeout(revealHackerPower, 500);
  setTimeout(revealPlayerPower, 800);
  setTimeout(compareCards, 1400);
}

function revealPlayerPower() {
  var playerCard = document.querySelector(".played-card");
  playerCard.classList.add("reveal-power");
}

function revealHackerPower() {
  var hackerCard = document.querySelector(".hacker-card");
  hackerCard.classList.add("reveal-power");
}

// ========== COMPARE CARDS ==========
function compareCards() {
  var playerCard = document.querySelector(".played-card");
  var hackerCard = document.querySelector(".hacker-card");

  var playerPower = parseInt(playerCard.querySelector(".power").innerHTML);
  var hackerPower = parseInt(hackerCard.querySelector(".power").innerHTML);

  var powerDifference = playerPower - hackerPower;

  if(powerDifference < 0) {
    playerLife += powerDifference; // lose life
    hackerCard.classList.add("better-card");
    playerCard.classList.add("worse-card");
    document.querySelector(".player-stats .thumbnail").classList.add("ouch");
  } else if(powerDifference > 0) {
    hackerLife -= powerDifference; // hacker loses life
    playerCard.classList.add("better-card");
    hackerCard.classList.add("worse-card");
    document.querySelector(".hacker-stats .thumbnail").classList.add("ouch");
  } else {
    playerCard.classList.add("tie-card");
    hackerCard.classList.add("tie-card");
  }

  updateScores();

  if(playerLife <= 0) gameOver("Hacker");
  else if(hackerLife <= 0) {
    if(currentLevel < levels.length - 1) {
      alert(`You cleared ${levels[currentLevel].name}! Proceeding to next level.`);
      initGame(currentLevel + 1);
      startGame();
    } else {
      gameOver("Player");
    }
  } else {
    roundFinished = true;
    document.querySelector("button.next-turn").removeAttribute("disabled");
  }
}

// ========== GAME OVER ==========
function gameOver(winner) {
  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-section").style.display = "flex";
  document.querySelector(".winner-section").classList.remove("player-color","hacker-color");

  if(winner === "Hacker") {
    document.querySelector(".winner-message").innerHTML = hackerWinnerMessage;
    document.querySelector(".winner-section").classList.add("hacker-color");
  } else {
    document.querySelector(".winner-message").innerHTML = playerWinnerMessage;
    document.querySelector(".winner-section").classList.add("player-color");
  }
}

// ========== UPDATE SCORES ==========
function updateScores() {
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;
  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;

  var playerPercent = Math.max(playerLife / playerStartLife * 100, 0);
  var hackerPercent = Math.max(hackerLife / hackerStartLife * 100, 0);

  document.querySelector(".player-stats .life-left").style.height = playerPercent + "%";
  document.querySelector(".hacker-stats .life-left").style.height = hackerPercent + "%";
}

// ========== START / RESTART ==========
function startGame() {
  document.querySelector(".game-board").classList.remove("before-game");
  document.querySelector(".game-board").classList.add("during-game");
  playTurn();
}

function restartGame() {
  initGame(0);
  startGame();
}

// ========== TURN & CARD REVEAL ==========
function playTurn() {
  roundFinished = true;
  cardSelected = false;

  document.querySelector(".game-board").classList.remove("card-selected");
  document.querySelector(".hacker-stats .thumbnail").classList.remove("ouch");
  document.querySelector(".player-stats .thumbnail").classList.remove("ouch");
  document.querySelector(".next-turn").setAttribute("disabled","true");

  document.querySelectorAll(".card").forEach(c => c.classList.remove("showCard"));

  setTimeout(revealCards, 500);
}

function revealCards() {
  var j = 0;
  var cardIndexes = shuffleArray([0,1,2]);
  var randomScenarioIndex = Math.floor(Math.random() * scenarios.length);
  var scenario = scenarios[randomScenarioIndex];
  scenarios.splice(randomScenarioIndex,1);

  var hackerCard = scenario.hackerCard;
  var hackerCardEl = document.querySelector(".hacker-area .card");

  var playerCards = scenario.playerCards;

  document.querySelectorAll(".card").forEach((card,i) => {
    card.className = card.classList.contains("player-card") ? "card player-card" : "card hacker-card";
    if(card.classList.contains("player-card")) {
      card.querySelector(".text").innerHTML = playerCards[cardIndexes[j]].description;
      card.querySelector(".power").innerHTML = playerCards[cardIndexes[j]].power;
      j++;
    }
    setTimeout(() => {
      card.style.display = "block";
      card.classList.add("showCard");
    }, (i+1) * 200);
  });

  hackerCardEl.querySelector(".text").innerHTML = hackerCard.description;
  hackerCardEl.querySelector(".power").innerHTML = hackerCard.power;
}

// ========== SHUFFLE UTILITY ==========
function shuffleArray(a) {
  for(let i = a.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

// ===== INIT LEVEL 1 ON PAGE LOAD =====
initGame(0);
