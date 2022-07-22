const selectElement = document.querySelectorAll('.calc__select');
const currentValueEl = document.querySelector('#value');
const selectSize = document.getElementById('size');
const selectCity = document.getElementById('city');
const selectColor = document.getElementById('colors');
const selectDelivery = document.getElementById('delivery');
const totalPriceElement = document.getElementById('total-ptice');
const btnPrice = document.querySelector('.calc__btn');

let basePrice = 10;

function calculator() {
  let totalPrice =
    basePrice *
    currentValueEl.value *
    selectSize.options[selectSize.selectedIndex].value *
    selectColor.options[selectColor.selectedIndex].value *
    selectCity.options[selectCity.selectedIndex].value *
    selectDelivery.options[selectDelivery.selectedIndex].value;

  totalPriceElement.innerHTML = `${totalPrice.toFixed(2)} $`;
}

for (const select of selectElement) {
  select.addEventListener('input', function () {
    calculator();
  });
}

calculator();

btnPrice.addEventListener('click', function (e) {
  e.preventDefault();
  alert(
    `thank you for the order, extra payments ${totalPriceElement.innerHTML}`,
  );
});
