import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// ------------------------FORMATING DATE--------------------------

export function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

// ------------------------CONVERT FROM MS-------------------------


export function convertMs(ms) {
  // Number of milliseconds per unit of time
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

// ------------------ERROR MESSAGE FOR TIMER--------------------------

export function errorMessage(message) {
 iziToast.error({
    
   message: message,
   position: 'topLeft',
   transitionIn: 'fadeInDown',
   backgroundColor: 'rgb(231, 19, 36)',
   messageColor: 'white',
   iconColor: 'white',
   messageSize: '16px',
   class: 'toast',
});
}

// --------------ADDING AND REMOVE DISABLE STYLES FOR BTN----------------


export function buttonDisabledToggle(element, color) {
  if (element.disabled) {
    element.style.pointerEvents = "none";
    element.style.background = color;
  } else {
    element.style.removeProperty("pointer-events");
    element.style.removeProperty("background");
  }
}