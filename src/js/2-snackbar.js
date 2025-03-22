import { errorMessage, sucsessMessage } from './helpers'

const form = document.querySelector('.form');

fieldSetActive()


const makePromise = (state, delay) => {
  return new Promise((resolve, reject) => {
	   setTimeout(() => {
				if(state === 'fulfilled') {
					resolve(delay)
                }
                if (state === 'rejected') {
					reject(delay)
				}
			}, delay);
  });
};

form.addEventListener('submit', event => {
    event.preventDefault();
    
    let formData = new FormData(form);
    const state = formData.get('state')
    const delay = formData.get('delay')
    
    makePromise(state, delay)
        .then(value => sucsessMessage(`✅ Fulfilled promise in ${delay}ms`))
        .catch(error => errorMessage(`❌ Rejected promise in ${delay}ms`))
})  
    



function fieldSetActive() {
const radioButtons = document.querySelectorAll('.radio-button-input');
const fieldset = document.querySelector('fieldset');
  
radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      fieldset.style.color = '#40c9ff';
      fieldset.style.borderColor = '#40c9ff';
    }
  });
});

}

function inputActiveStyle(event) {
  const input = document.querySelector('input')
  const label = document.querySelector('.input-label')
  if (event.target.name === 'delay' && event.target.value)
  {
    input.style.borderColor = '#40c9ff';
    label.style.color = '#40c9ff';
    
  }
}
form.addEventListener('input', inputActiveStyle)




