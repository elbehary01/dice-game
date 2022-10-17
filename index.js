const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

function randomNum(num1, num2) {
  for (let i = 1; i < num1; i++) {
    if (num2 !== i) {
      // @ts-ignore
      document
        .querySelector('.img1')
        .setAttribute('src', `images/dice${num1}.png`);
      // @ts-ignore
      document
        .querySelector('.img2')
        .setAttribute('src', `images/dice${num2}.png`);
    }
  }
}

randomNum(randomNumber1, randomNumber2);

let ele = document.querySelector('h1');

if (!randomNum) {
  // @ts-ignore
  ele.textContent = 'Start to Play!';
} else if (randomNumber1 > randomNumber2) {
  // @ts-ignore
  ele.textContent = '🏆 Plyer 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  // @ts-ignore
  ele.textContent = 'Plyer 2 Wins! 🏆';
} else {
  // @ts-ignore
  ele.textContent = 'Drew!';
}
