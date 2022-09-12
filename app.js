// https://www.omnicalculator.com/conversion/crore-to-million

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const millionRadio = document.getElementById('millionRadio');
const croreRadio = document.getElementById('croreRadio');

let million;
let crore = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

millionRadio.addEventListener('click', function() {
  variable1.textContent = 'Crore';
  crore = v1;
  result.textContent = '';
});

croreRadio.addEventListener('click', function() {
  variable1.textContent = 'Million';
  million = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(millionRadio.checked)
    result.textContent = `Million = ${computemillion().toFixed(5)}`;

  else if(croreRadio.checked)
    result.textContent = `Crore = ${computecrore().toFixed(5)}`;
})

// calculation

function computemillion() {
  return Number(crore.value) * 10;
}

function computecrore() {
  return Number(million.value) / 10;
}