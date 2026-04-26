let rendomNumber = Math.floor(Math.random(1 + 1) * 21);

const againBtn = document.getElementById('againBtn');

const curentEmogi = document.querySelector('.curentEmogi');
const curentAns = document.getElementById('curentAns');

const attempt = document.getElementById('attempt');
const checkBtn = document.getElementById('checkBtn');
const win = document.getElementById('win');

let attemptNum = 0;

const gaemCheeck = () => {
  const inputBox = document.getElementById('inputBox').value;
  attemptNum += 1;
  if (+inputBox < rendomNumber) {
    attempt.innerHTML = attemptNum;
    curentEmogi.innerHTML = `😔`;
    curentAns.innerHTML = `It's Lowest Number`;
  } else if (+inputBox > rendomNumber) {
    attempt.innerHTML = attemptNum;
    curentEmogi.innerHTML = `😊`;
    curentAns.innerHTML = `It's Heiest Number`;
  } else if (+inputBox == rendomNumber) {
    win.innerHTML = '🥳';
    attempt.innerHTML = attemptNum;
    curentEmogi.innerHTML = rendomNumber;
    curentAns.innerHTML = `🎉You are Win!`;
  }
};

checkBtn.addEventListener('click', () => {
  gaemCheeck();
});

againBtn.addEventListener('click', () => {
  win.innerHTML = '';
  attempt.innerHTML = 0;
  attemptNum = 0;
  curentEmogi.innerHTML = '😊';
  curentAns.innerHTML = `Guess The Number ...`;
  document.getElementById('inputBox').value = '';
  rendomNumber = Math.floor(Math.random(1 + 1) * 21);
});
