import Notiflix from 'notiflix';

const form = document.querySelector('.form');


form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    
    e.preventDefault();
    let delay = Number(form.elements.delay.value); 
    const amount = Number(form.elements.amount.value);
    const step = Number(form.elements.step);

    for (let position = 1; position <= amount; position += 1) {
        createPromise(position, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
        delay += step;
    }
}

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay });    // Fulfill
            } else {
                reject({position, delay})// Reject
            }
        }, delay)
    });
}

