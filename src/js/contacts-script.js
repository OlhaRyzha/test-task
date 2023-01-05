const listEl = document.querySelector('.contacts__list');
const itemEl = [...listEl.children];
const btn = document.querySelector('.contacts__btn');
console.log(btn);

fetch(
  'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=32'
)
  .then(response => response.json())
  .then(data => {
    const users = data.users;

    const sortUsers = [...users].sort(
      (firstRegistration, secondRegistration) =>
        firstRegistration.registration_timestamp -
        secondRegistration.registration_timestamp
    );
    console.log(sortUsers);
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
        console.log(counterValue);
      }
    }

    if (data.success) {
      `process success response`;
    } else {
      `proccess server errors `;
    }
  });

const obj = {
  email: 'kjkfdnkj@mail.ru',
  id: 11172,
  name: 'doidjf',
  phone: '+380938491222',
  photo:
    'https://frontend-test-assignment-api.abz.agency/images/users/63b5dc1b5396c11172.jpg',
  position: 'Content manager',
  position_id: 2,
  registration_timestamp: 1672862747,
};
