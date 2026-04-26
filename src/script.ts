let rendomNumber: number = Math.floor(Math.random() * 20) + 1;

const againBtn = document.getElementById('againBtn') as HTMLButtonElement;

const curentEmogi = document.querySelector(
  '.curentEmogi',
) as HTMLHeadingElement;
const curentAns = document.getElementById('curentAns') as HTMLHeadingElement;

const attempt = document.getElementById('attempt') as HTMLSpanElement;
const checkBtn = document.getElementById('checkBtn') as HTMLButtonElement;
const win = document.getElementById('win') as HTMLParagraphElement;

const inputBox = document.getElementById('inputBox') as HTMLInputElement;

let attemptNum: number = 0;

const gaemCheeck = () => {
  const inputvlu = inputBox.value;
  attemptNum += 1;
  if (+inputvlu < rendomNumber) {
    inputBox.value = '';
    attempt.innerHTML = `${attemptNum}`;
    curentEmogi.innerHTML = `😔`;
    curentAns.innerHTML = `It's Lowest Number`;
    inputBox.value = '';
  } else if (+inputvlu > rendomNumber) {
    attempt.innerHTML = `${attemptNum}`;
    curentEmogi.innerHTML = `😊`;
    curentAns.innerHTML = `It's Heiest Number`;
    inputBox.value = '';
  } else if (+inputvlu == rendomNumber) {
    win.innerHTML = '🥳';
    attempt.innerHTML = `${attemptNum}`;
    curentEmogi.innerHTML = `${rendomNumber}`;
    curentAns.innerHTML = `🎉You are Win!`;
    inputBox.value = '';
  }
};

checkBtn.addEventListener('click', () => {
  gaemCheeck();
});

againBtn.addEventListener('click', () => {
  win.innerHTML = '';
  attempt.innerHTML = '0';
  attemptNum = 0;
  curentEmogi.innerHTML = '😊';
  curentAns.innerHTML = `Guess The Number ...`;
  inputBox.value = '';
  rendomNumber = Math.floor(Math.random() * 20) + 1;
});
