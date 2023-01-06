//Получаем инпут file в  переменную
const form = document.querySelector('form');
const formImage = document.querySelector('.input-img');
//Получаем див для превью в переменную
const formPreview = document.querySelector('.file__preview');

let formReq = [...document.querySelectorAll('.req')];

// formReq[0].classList.add('error')

  
form.addEventListener('submit', formSend);
form.addEventListener('change', onFormChange);
// form.addEventListener('change', formSend);
function formSend(e) {

    e.preventDefault();
    let error = formValidate(form);

if (error === 0) {
      console.log('good')
    }else{
      alert('Заполните обязательные поля');
    }

  }
  
  function onFormChange(form){
    for (let i= 0; i < formReq.length; i += 1) {
  
      const input = formReq[i];

      formRemoveError(input);
      
      if (input.classList.contains('email')) {
        if (emailTest(input)) {
          input.style.boxShadow = '0 0 15px red'
        }else{
          input.style.boxShadow = '0 0 15px green'
        }
      } 
      else {
        if (input.value === '') {
          input.style.boxShadow = '0 0 15px red'
        }else{
          input.style.boxShadow = '0 0 15px green'
        }
      }
  }
  }


  function formValidate(form) {
    let error = 0;

    for (let i= 0; i < formReq.length; i += 1) {
  
      const input = formReq[i];

      formRemoveError(input);
    
      if (input.classList.contains('email')) {
        if (emailTest(input)) {
          formAddError(input);
          error += 1;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error += 1;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
  //  input.parentElement.classList.add('error')
    input.classList.add('error');
    console.log(input)
  }

  function formRemoveError(input) {
    // input.parentElement.classList.remove('error')
    input.classList.remove('error');
  }

  //Функция теста email
  function emailTest(input) {
    return !/^|w+([.-]?w+)*@w+([.-]?w+)*(.w{2,8})+$/.test(input.value);
  }

  //Слушаем изменения 6 инпуте file
  // formImage.addEventListener('change', () => {
  //   uploadFile(formImage.files[0]);
  // });

  // function uploadFile(file) {
  //   // провераяем тип файла
  //   if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
  //     alert('Разрешены только изображения.');
  //     formImage.value = '';
  //     return;
  //   }
  //   // проверим размер файла (<2 Мб)
  //   if (file.size > 2 * 1024 * 1024) {
  //     alert('Файл должен быть менее 2 МБ.');
  //     return;
  //   }

  //   const reader = new FileReader();
  //   reader.onload = function (e) {
  //     formPreview.innerHTML = `<img src="${e.target.result}" alt ="photo">`;
  //   };
  //   reader.onerror = function (e) {
  //     alert('Ошибка');
  //   };

  //   reader.readAsDataURL(file);
  // }

