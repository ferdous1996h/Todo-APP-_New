'use strict';

const input_v = document.querySelector('.input_box');
const btn = document.querySelector('.btn_field');
const ul_bar = document.querySelector('.task_bar');
btn.addEventListener('click', function () {
  if (input_v.value === '') {
    alert('You must add some text');
  } else {
    let li_crt = document.createElement('li');
    li_crt.textContent = input_v.value;
    ul_bar.appendChild(li_crt);
    let spn_crt = document.createElement('span');
    spn_crt.innerHTML = '&times';
    li_crt.appendChild(spn_crt);
    input_v.value = '';
    input_v.blur();
    keepData();
  }
});
ul_bar.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('complete');
    keepData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    keepData();
  }
});
function keepData() {
  localStorage.setItem('data', ul_bar.innerHTML);
}
function getData() {
  ul_bar.innerHTML = localStorage.getItem('data');
}
getData();

