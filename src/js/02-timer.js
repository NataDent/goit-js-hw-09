import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const selectors = {
    input: document.querySelector('#datetime-picker'),
    btn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]')
}

selectors.btn.disabled = true;

let startTime = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

    onClose(selectedDates) {
      if (selectedDates[0] <= new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        
        return;
    } else {
      startTime = selectedDates[0].getTime();
      selectors.btn.removeAttribute('disabled');
    }
  },
}; 

  const fp = flatpickr(selectors.input, options);

  selectors.btn.addEventListener('click', onClick);

function onClick() {
  
  
  selectors.input.value = '';

  
  const timer = setInterval(() => {
       
    const leftTime = fp.selectedDates[0].getTime() - Date.now();
      
    const time = convertMs(leftTime);
    
    const days = time.days;
    const hours = time.hours;
    const minutes = time.minutes;
    const seconds = time.seconds;

    selectors.days.textContent = days.toString().padStart(2,0);
    selectors.hours.textContent = hours.toString().padStart(2,0);
    selectors.minutes.textContent = minutes.toString().padStart(2,0);
    selectors.seconds.textContent = seconds.toString().padStart(2, 0);

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


