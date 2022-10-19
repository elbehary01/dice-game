const btnPlayer1 = document.querySelectorAll('.btn')[0];
const btnPlayer2 = document.querySelectorAll('.btn')[1];
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
btnPlayer1.addEventListener('click', function () {
  randomNum1(randomNumber1);
});

btnPlayer2.addEventListener('click', function () {
  randomNum2(randomNumber2);
});

function randomNum1(num) {
  if (num !== 6) {
    // @ts-ignore
    document
      .querySelector('.img1')
      .setAttribute('src', `images/dice${num}.png`);
  }
}
function randomNum2(num) {
  if (num !== 6) {
    // @ts-ignore
    document
      .querySelector('.img2')
      .setAttribute('src', `images/dice${num}.png`);
  }
}

// randomNum(randomNumber1, randomNumber2);

// let ele = document.querySelector('h1');

// if (!randomNum) {
//   // @ts-ignore
//   ele.textContent = 'Start to Play!';
// } else if (randomNumber1 > randomNumber2) {
//   // @ts-ignore
//   ele.textContent = '🏆 Plyer 1 Wins!';
// } else if (randomNumber2 > randomNumber1) {
//   // @ts-ignore
//   ele.textContent = 'Plyer 2 Wins! 🏆';
// } else {
//   // @ts-ignore
//   ele.textContent = 'Drew!';
// }
