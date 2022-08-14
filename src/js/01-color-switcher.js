const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector(`body`);
let timerId = null;
let isActive = false;

btnStart.addEventListener('click', onCangeColorClick);
btnStop.addEventListener('click', stopCangeColorClick);

function onCangeColorClick(element) {
  if (isActive) {
    return;
  }
  isActive = true;
  btnStart.disabled = true;
  timerId = setInterval(() => {
    const RandomBgColor = `${getRandomHexColor()}`;
    body.style.backgroundColor = `${RandomBgColor}`;
    return body.style.backgroundColor;
  }, 1000);
}

function stopCangeColorClick() {
  clearInterval(timerId);
  isActive = false;
  btnStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
