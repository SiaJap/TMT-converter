
const rates = {};

const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementUAH = document.querySelector('[data-value="UAH"]');
// const elementRUB = document.querySelector('[data-value="RUB"]');
// const elementCNY = document.querySelector('[data-value="CNY"]');
// const elementCAD = document.querySelector('[data-value="CAD"]');
// const elementHKD = document.querySelector('[data-value="HKD"]');
// const elementUZS = document.querySelector('[data-value="UZS"]');
// const elementKRW = document.querySelector('[data-value="KRW"]');
// const elementCUP = document.querySelector('[data-value="CUP"]');

const input = document.querySelector('#input');
const select = document.querySelector('#select');
const result = document.querySelector('#result');

getCurrencies ();
function getCurrencies (){
  fetch('http://www.floatrates.com/daily/tmt.json').then(function(response){
      return response.json()
  }).then(function(data){

    rates.USD = data.usd.rate;
    rates.EUR = data.eur.rate;
    rates.UAH = data.uah.rate;
    rates.RUB = data.rub.rate;
    rates.CNY = data.cny.rate;
    rates.CAD = data.cad.rate;
    rates.HKD = data.hkd.rate;
    rates.UZS = data.uzs.rate;
    rates.KRW = data.krw.rate;
    rates.CUP = data.cup.rate;

    elementUSD.textContent = rates.USD.toFixed(2);
    elementEUR.textContent = rates.EUR.toFixed(2);
    elementUAH.textContent = rates.UAH.toFixed(2);
  })

}

input.oninput = function(){
    convert();
}

select.oninput = function(){
    convert();
}

function convert(){
    result.value = (parseFloat(input.value * rates[select.value])).toFixed(2);
}