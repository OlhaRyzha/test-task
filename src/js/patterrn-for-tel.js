import {userInfo} from './local-storage-of-form.js';

const form = document.querySelector('form');
const reqInput = document.querySelector('.req');
const tel = document.querySelector('input[name = tel]');
const email = document.querySelector('input[name = email]');
const name = document.querySelector('input[name = name]');
const formImage = document.querySelector('.input-img');
const loadPhotoInput = document.querySelector('.load-input');
const formPreview = document.querySelector('.file__preview');
const formBtnEl = document.querySelector('.modal-form-btn');

// console.log(email)

form.addEventListener("keyup", e =>{
const target = e.target;
formBtnEl.removeAttribute('disabled')
if((target === tel && target.value.length < 13) ||
(target === email && !target.value.includes('@'))||
(target === name && target.value.length < 2)
){target.style.boxShadow = '0 0 15px red';
   formBtnEl.setAttribute('disabled', 'disabled')
   console.log(!target.hasAttribute(style="box-shadow: red 0px 0px 15px"))
}
  else{target.style.boxShadow = '0 0 15px green'}

})



  formImage.addEventListener('change', () => {
    loadPhotoInput.value = String(formImage.files[0].name);
    uploadFile(formImage.files[0]);
  });

  function uploadFile(file) {
    // провераяем тип файла
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      alert('Разрешены только изображения.');
      formImage.value = '';
      return;
    }
    // проверим размер файла (<2 Мб)
    if (file.size > 2 * 1024 * 1024) {
      alert('Файл должен быть менее 2 МБ.');
      return;
    }
  

    const reader = new FileReader();
    reader.onload = function (e) {
      formPreview.innerHTML = `<img src="${e.target.result}" class ="file__preview__js" alt ="photo">`;
     
    };
    reader.onerror = function (e) {
      alert('Ошибка');
    };

    reader.readAsDataURL(file);
  }



