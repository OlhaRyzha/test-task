import localStorageService from './localstorage.js';
import _throttle from 'lodash.throttle';
const contactFormEl = document.querySelector('form');
const formBtnEl = document.querySelector('.modal-form-btn');
const radioEl = [...document.querySelectorAll('.input-radio')];
const positionsEl = [...document.querySelectorAll('.input-wrap p')];
const formPreview = document.querySelector('.file__preview');
const formImage = document.querySelector('.input-img');
const successLoadEl = document.querySelector('#success__load');

export const userInfo = {};

const fillContactFormFields = () => {
  const userInfoFromLS = localStorageService.load('userData');

  if (userInfoFromLS === undefined) {
    return;
  }

  for(const prop in userInfoFromLS) {
    if (contactFormEl.elements[prop] === formImage) {
      contactFormEl.elements[prop].files[0] = userInfoFromLS[prop];
    } else {
      contactFormEl.elements[prop].value = userInfoFromLS[prop];
    }
  }
};

fillContactFormFields();

const onContactFormFieldChange = event => {
  const { target } = event;

  let fieldValue = target.value;
  let fieldName = target.name;
  if (fieldName === 'file') {
    fieldValue = formImage.files[0].name;
  }

  userInfo[fieldName] = fieldValue;
  localStorageService.save('userData', userInfo);
  // console.log(userInfo)
};

function onError(error) {
  alert(error);
}

function onSuccess(formNode) {
  alert('Your request has been sent!');
  formNode.classList.remove('hidden');
  formPreview.innerHTML = '';
  formNode.reset();
  setInterval (() =>location.reload(), 3000)
}

async function onContactFormSubmit(event){
  event.preventDefault();

  const elements = contactFormEl.elements;
  const formData = new FormData();
  const checkedRadio = [...elements.radio].find(el => el.checked);

  formData.append('position_id', checkedRadio.value);
  formData.append('name', elements.name.value);
  formData.append('email', elements.email.value);
  formData.append('phone', elements.tel.value);
  formData.append('photo', formImage.files[0]);
  console.log(Array.from(formData.entries()));
  toggleLoader();

  const { status, error }= await sendData(formData);
console.log(status)
  if (status === 200 || 201) {
    onSuccess(event.target)
  }else if(status === 409){
    alert('A user with this data is already registered!')
    location.reload()
  } else {
    onError(error)
  }

  toggleLoader();

  successLoadEl.classList.add('success__load__js');
 
};

async function sendData(data) {
  const { token } = await fetchToken();
  console.log(token);
  return await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    {
      method: 'post',
      headers: {
        Token: token,
      },
      body: data,
    }
  );
}

async function fetchToken() {
  return await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  ).then(response => response.json());
}

function toggleLoader() {
  const loader = document.getElementById('loader');
  loader.classList.toggle('hidden');
}


contactFormEl.addEventListener('change', onContactFormFieldChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
successLoadEl.addEventListener('click', () => {successLoadEl.classList.remove('success__load__js')})


