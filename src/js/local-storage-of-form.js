import _throttle from 'lodash.throttle';
import localStorageService from './localstorage.js';

const contactFormEl = document.querySelector('form');
const formBtnEl = document.querySelector('.modal-form-btn');
const radioEl = document.querySelector('.input-radio');


export const userInfo = {};

const fillContactFormFields = () => {
  const userInfoFromLS = localStorageService.load('userData');

  if (userInfoFromLS === undefined) {
    return;
  }

  for (const prop in userInfoFromLS) {
  
    contactFormEl.elements[prop].value = userInfoFromLS[prop];
  }
};

fillContactFormFields();

const onContactFormFieldChange = event => {
  const { target } = event;

  const fieldValue = target.value;
  const fieldName = target.name;

  if(fieldName === 'file-img'){
   return
  }

  userInfo[fieldName] = fieldValue;

  localStorageService.save('userData', userInfo);

};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  localStorageService.remove('userData');
};

function onContactFormImput(){
  
}

contactFormEl.addEventListener('change', onContactFormFieldChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
contactFormEl.addEventListener('input', onContactFormImput);







