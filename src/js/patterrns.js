import {userInfo} from './form.js';

const form = document.querySelector('form');
const reqInput = document.querySelector('.req');
const tel = document.querySelector('input[name = tel]');
const email = document.querySelector('input[name = email]');
const name = document.querySelector('input[name = name]');
const formImage = document.querySelector('.input-img');
const loadPhotoInput = document.querySelector('.load-input');
const formPreview = document.querySelector('.file__preview');

const formBtnEl = document.querySelector('.modal-form-btn');



form.addEventListener("keyup", e =>{
const target = e.target;
formBtnEl.removeAttribute('disabled')
if((target === tel && target.value.length < 13) ||
(target === email && !target.value.includes('@'))||
(target === name && target.value.length < 2)
){target.style.boxShadow = '0 0 15px red';
   formBtnEl.setAttribute('disabled', 'disabled')

}
  else{target.style.boxShadow = '0 0 15px green'}

})



  formImage.addEventListener('change', (e) => {
    loadPhotoInput.placeholder = String(formImage.files[0].name);
     uploadFile(formImage.files[0]);
  });



  function uploadFile(file) {
    // провераяем тип файла
    if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
      alert('Only images are allowed');
      formImage.value = '';
      return;
    }
    // проверим размер файла (<5 Мб)
    if (file.size > 5500 || 
      file.width > 70 ||
      file.height > 70) {
      alert('Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb');
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



