import Notiflix from 'notiflix';

const form = document.querySelector('.form');


form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let delay = e.currentTarget.elements.delay.value; 
    const amount = e.currentTarget.elements.amount.value;
    const step = e.currentTarget.elements.step;

    for (let position = 1; position <= amount; position += 1) {
        createPromise(position, delay)
        delay += step;
    }
}

function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
                resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)    // Fulfill
            } else {
                reject(`❌ Rejected promise ${position} in ${delay}ms`)// Reject
            }
        }, delay)
    });
promise
    .then(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
    .catch(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)); 
}

