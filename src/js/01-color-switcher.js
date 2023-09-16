let idInterval = null;

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.stopBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', onStartBtnChangeColor);
refs.stopBtn.addEventListener('click', onStopBtnChangeColor);

function onStartBtnChangeColor() {
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled');
    idInterval = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopBtnChangeColor() {
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', true);
    clearInterval(idInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}