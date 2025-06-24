let gameseq = [];
let userseq = [];

const btns = ["red", "green", "yellow", "blue"];
let started = false;
let level = 0;

let h3 = document.querySelector('h3')

const h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIdx];
  gameseq.push(randomColor);

  let btn = document.querySelector(`.${randomColor}`);
  btnFlash(btn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function checkAnswer(index) {
  if (userseq[index] === gameseq[index]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelUp, 800);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  h2.innerText = `Game Over! You reached Level ${level}. Press any key to restart.`;
  h3.innerText = `your heighest score is ${level}`
  document.body.classList.add("wrong");
  setTimeout(() => {
    document.body.classList.remove("wrong");
  }, 200);

  resetGame();
}

function resetGame() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}

const allBtns = document.querySelectorAll(".btn1");
for (let btn of allBtns) {
  btn.addEventListener("click", function () {
    let userColor = btn.classList[1];
    userseq.push(userColor);
    userFlash(btn);
    checkAnswer(userseq.length - 1);
  });
}




