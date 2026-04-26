let rendomNumber = Math.floor(Math.random() * 20) + 1;
const againBtn = document.getElementById('againBtn');
const curentEmogi = document.querySelector('.curentEmogi');
const curentAns = document.getElementById('curentAns');
const attempt = document.getElementById('attempt');
const checkBtn = document.getElementById('checkBtn');
const win = document.getElementById('win');
const inputBox = document.getElementById('inputBox');
let attemptNum = 0;
const gaemCheeck = () => {
    const inputvlu = inputBox.value;
    attemptNum += 1;
    if (+inputvlu < rendomNumber) {
        inputBox.value = '';
        attempt.innerHTML = `${attemptNum}`;
        curentEmogi.innerHTML = `😔`;
        curentAns.innerHTML = `It's Lowest Number`;
        inputBox.value = '';
    }
    else if (+inputvlu > rendomNumber) {
        attempt.innerHTML = `${attemptNum}`;
        curentEmogi.innerHTML = `😊`;
        curentAns.innerHTML = `It's Heiest Number`;
        inputBox.value = '';
    }
    else if (+inputvlu == rendomNumber) {
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
export {};
//# sourceMappingURL=script.js.map