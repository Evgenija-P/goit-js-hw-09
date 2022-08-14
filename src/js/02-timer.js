import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

const btn = document.querySelector('button[data-start]');
const input = document.querySelector(`#datetime-picker`);
const timerClock = document.querySelector('.timer');
const timeDays = document.querySelector('span[data-days]');
const timeHours = document.querySelector('span[data-hours]');
const timeMinutes = document.querySelector('span[data-minutes]');
const timeSeconds = document.querySelector('span[data-seconds]');

// const flatpickr = require('flatpickr');
// const timing = new flatpickr(input, options);
let selectionDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectionDate = selectedDates[0];
    // currentDate = Date.now();
    if (selectionDate < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        position: 'center-top',
      });
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
    console.log(selectionDate);
  },
};

flatpickr(input, options);
btn.addEventListener('click', onPickDate);

function onPickDate() {
  intervalId = setInterval(() => {
    btn.disabled = true;
    input.disabled = true;
    const restTime = selectionDate - new Date();
    if (restTime <= 0) {
      clearInterval(intervalId);
      input.disabled = false;
      return;
    }
    convertMs(restTime);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  timerComponents({ days, hours, minutes, seconds });
}

const timerComponents = ({ days, hours, minutes, seconds }) => {
  timeDays.innerHTML = days;
  timeHours.innerHTML = hours;
  timeMinutes.innerHTML = minutes;
  timeSeconds.innerHTML = seconds;
};
