import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { convertMs, addLeadingZero, errorMessage, buttonDisabledToggle } from './helpers'

// GLOBAL
let timerID = null;
const startButton = document.querySelector(".button");

// add disable btn styles
buttonDisabledToggle(startButton,'#7a3136')

// FLATPICR LIBRARY IMPLEMENT
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // CLOSING BEHAVIOR LOGIC FOR ONCLOSE METHOD
  onClose(selectedDates) {
    
    const endDate = new Date(selectedDates[0].getTime());
    const now = new Date().getTime();
    
    if (endDate - now < 0) {
      errorMessage("Please choose a date in the future");
      return;
    }
    //make btn active
    startButton.removeAttribute('disabled')
    buttonDisabledToggle(startButton,'#7a3136')
    // remove prev interval, add new and start timer
    startButton.removeEventListener('click', startTimer);
    startButton.addEventListener('click', () => {
      startTimer(endDate);
      // make btn disabled
      startButton.setAttribute('disabled', 'true')
      buttonDisabledToggle(startButton,'#7a3136') 
    });
  
  }   
}
flatpickr("#datetime-picker", options);


//START TIMER LOGIC
function startTimer(endDate) {
      // if prev timer exist
      if (timerID) clearInterval(timerID);
      // start timer
      timerID = setInterval(() => {
      let now = new Date().getTime();
      const timeLeft = endDate - now;
      // if time on timer ends
      if (timeLeft <= 0) {
        clearInterval(timerID);
        displayTimer(0, 0, 0, 0);
        return;
        }
      // convert time to d.h.m.s and adding to html 
      let { days, hours, minutes, seconds } = convertMs(endDate - now);
      displayTimer(days, hours, minutes, seconds);
        
      }, 1000)
    }

//ADDING TIME TO HTML
function displayTimer(days, hours, minutes, seconds) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days) ;
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}


