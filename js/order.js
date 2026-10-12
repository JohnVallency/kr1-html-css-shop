const orderPageForm = document.getElementById('order-page-form');
const orderPageSuccess = document.getElementById('order-page-success');

orderPageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  orderPageSuccess.hidden = false;
  orderPageForm.reset();
});