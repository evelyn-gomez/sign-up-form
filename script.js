const innerForm = document.querySelector('.innerform');

let inputs = document.getElementsByTagName('input');
let errors = document.querySelectorAll('.innerform .error');
for (let input of inputs) {
  input.addEventListener('input', function(event) {
    checkError(event.target);
  })
}

/**
 * 
 * @param {element} input 
 */
function checkError(input) {
  let container = input.parentElement;
  let label = container.querySelector('label').textContent;
  let errorDiv = container.querySelector('.error');
  console.log(input.value);
  errorDiv.textContent = getError(input, label);
}

/**
 * 
 * @param {HTMLInputElement} input
 * @param {string} label
 * @returns {string}
 */
function getError(input, label) {
  if(input.id == "first-name" || input.id == 'lastname'){
    return nameOnlyCondition(input,label);
  }
  if(input.id == 'email'){
    return emailConditon(input,label);
  }
  return ''; 
}

function nameOnlyCondition(input,label){
  if (input.value == '') {
    return `Please enter a ${label}.`; 
  }
  if (input.validity.tooShort) {
    return `${label} is too short.`; 
  }
  return ''; 
}

function emailConditon(input,label){
  if (input.value == '') {
    return `Please enter a ${label}.`; 
  }
  if(!input.value.includes('@')){
   return `Please enter domain name`; 
  }
  return ''; 
}

