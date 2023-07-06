import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
console.log(Notiflix);

const selectors = {
    input: document.querySelector('#datetime-picker'),
    btn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hrs: document.querySelector('span[data-hours]'),
    min: document.querySelector('span[data-minutes]'),
    sec: document.querySelector('span[data-seconds]')
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

console.log(options);

const fp = flatpickr(selectors.input, options);

selectors.btn.addEventListener('click', onClick);

function onClick() {
    setInterval(() => {
    const currentDate = new Date();
const targetDate = new Date(selectors.input.value);
   console.log(Date.now(targetDate)) 
   }, 1000) 
}
