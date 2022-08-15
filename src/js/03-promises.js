import Notiflix from 'notiflix';
const form = document.querySelector('.form'); //// форма
const dalayInput = document.querySelector('input[name="delay"]'); //// первая задержка
const stepInput = document.querySelector('input[name="step"]'); ///// шаг
const amountInput = document.querySelector('input[name="amount"]'); //// кол-во повторений

form.addEventListener('submit', onForm);

const settings = {
  timeout: 2500,
};

function onForm(event) {
  event.preventDefault();
  var dalay = Number(dalayInput.value);
  var step = Number(stepInput.value);
  var amount = Number(amountInput.value);
  for (let i = 0; i <= amount; i++) {
    const curretnData = step * i + dalay;
    createPromise(i + 1, curretnData)
      .then(result => {
        Notiflix.Notify.success(result, settings);
      })
      .catch(error => {
        Notiflix.Notify.failure(error, settings);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
