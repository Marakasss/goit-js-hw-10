
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { convertMs, addLeadingZero } from './helpers'

let timerID = null;
const startButton = document.querySelector(".button");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    const endDate = new Date(selectedDates[0].getTime());
    const now = new Date().getTime();
    
    if (endDate - now < 0) { 
      alert('rgf')
      return
    }    
    
    startButton.removeEventListener('click', startTimer);
    startButton.addEventListener('click', () => startTimer(endDate));
  
  }   
}
flatpickr("#datetime-picker", options);



function displayTimer(days, hours, minutes, seconds) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days) ;
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}


function startTimer(endDate) {

      if (timerID) clearInterval(timerID);

      timerID = setInterval(() => {
      let now = new Date().getTime();
      const timeLeft = endDate - now;

      if (timeLeft <= 0) {
        clearInterval(timerID);
        displayTimer(0, 0, 0, 0);
        return;
        }
        
        let { days, hours, minutes, seconds } = convertMs(endDate - now);
        displayTimer(days, hours, minutes, seconds);
        
      }, 1000)
    }
