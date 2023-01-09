const listEl = document.querySelector('.contacts__list');
const itemEl = [...listEl.children];
const btn = document.querySelector('.contacts__btn');


fetchUser().then(renderClientsCard).catch(error => alert('Error'));

function fetchUser(){
 return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=32')
  .then(response => {return response.json()})
 };


 function renderClientsCard(data){
    const users = data.users;
// console.log(users)
    const sortUsers = [...users].sort(
      (firstRegistration, secondRegistration) =>
      secondRegistration.registration_timestamp -
        firstRegistration.registration_timestamp
    );

    // const {email, name, phone, photo, position} = sortUsers;

    for (let i = 0; i < itemEl.length; i += 1) {
      const cardImg = document.querySelectorAll('.contacts__img');
      const cardName = document.querySelectorAll('.contacts__name');
      const cardPhone = document.querySelectorAll('.contacts__tel');
      const cardPosition = document.querySelectorAll('.contacts__job-title');
      const cardEmail = document.querySelectorAll('.contacts__email');

      cardImg[i].src = sortUsers[i].photo;
      cardName[i].textContent = sortUsers[i].name;
      cardPhone[i].textContent = sortUsers[i].phone;
      cardPosition[i].textContent = sortUsers[i].position;
      cardEmail[i].textContent = sortUsers[i].email;

      cardName[i].dataset.tooltip = cardName[i].textContent;
      cardPhone[i].dataset.tooltip = cardPhone[i].textContent;
      cardEmail[i].dataset.tooltip = cardEmail[i].textContent;
      cardPosition[i].dataset.tooltip = cardPosition[i].textContent;

      let counterValue = 0;
      btn.addEventListener('click', onBtnClick);
      function onBtnClick(event) {
        counterValue += 1;
        const numCalc = i + 6 * counterValue;
        if (numCalc < sortUsers.length) {
          cardImg[i].src = sortUsers[numCalc].photo;
          cardName[i].dataset.tooltip = cardName[i].textContent =
            sortUsers[numCalc].name;
          cardPhone[i].dataset.tooltip = cardPhone[i].textContent =
            sortUsers[numCalc].phone;
          cardPosition[i].dataset.tooltip = cardPosition[i].textContent =
            sortUsers[numCalc].position;
          cardEmail[i].dataset.tooltip = cardEmail[i].textContent =
            sortUsers[numCalc].email;
        } else {
          btn.classList.add('visually-hidden');
          return;
        }
  
      }
    }

  }


