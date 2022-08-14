import Notiflix from 'notiflix';
const btn = document.querySelector('button');
const dalay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`, {
//       position: 'center-top',
//     });
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
//       position: 'center-top',
//     });
//   });
