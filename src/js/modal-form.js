const positionsEl = document.querySelectorAll('.input-wrap p')

fetchPosition().then(renderElWithPosition).catch(error => alert('Error'));

function fetchPosition(){
 return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
  .then(response => {return response.json()})
 };


 function renderElWithPosition(data){
  const positions = data.positions;
  const sortPositions = [...positions]
  .sort((firstPosition, secondPosition) =>firstPosition.name.localeCompare(secondPosition.name))
  .map(el => el.name);

for(let i = 0; i < positionsEl.length; i += 1){
  positionsEl[i].textContent = sortPositions[i];
 }
};