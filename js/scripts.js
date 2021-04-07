let  elToDo = document.querySelector('.js-todo');
let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let  elCheckbox= document.querySelector('.js-chechbox');
let elIncludes = document.querySelector('.js-includes-output');
let elOutput = document.querySelector('.js-output');


let toDoList = [];

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let isChecked = elCheckbox.checked;

  if(toDoList.includes(elInput.value)) {
    elIncludes.classList.add('text-center', 'h4', 'text-danger');
    elIncludes.textContent = 'Error';

    elInput.value = '';
    return;
  }

  if(isChecked) {
    toDoList.unshift(elInput.value);
    elOutput.innerHTML = `<p> ${toDoList.join(`<p class='border-top'></p>`)} </p>`;
    elInput.value = '';
  } else {
    toDoList.push(elInput.value);
    elOutput.classList.add('border-bottom');
    elOutput.innerHTML = `<p class='m-0'> ${toDoList.join('<p class="border-top"></p>')} </p>`;
    elInput.value = '';
  }

  elCheckbox.checked = false;
  elInput.focus();
  
});





