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
selectors.input.value = '';
  
  const fp = flatpickr(selectors.input, options);

  selectors.btn.addEventListener('click', onClick);

function onClick() {
  const targetDate = new Date(selectors.input.value);
  const currentDate = new Date();
  const leftTime = targetDate.getTime() - currentDate.getTime();
 
if (targetDate <= currentDate) {
  window.alert('Please choose a date in the future')
  return;
  } 
  const timer = setInterval(() => {
    
  }, 1000)
} 



function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}    
