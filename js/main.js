'use strict';

let check = 0;
const input = document.querySelectorAll('input');
const form = document.querySelector('form');

const attribute = (elements, attr, func) => {
  elements.forEach((element) => {
    if (element.hasAttribute(attr)) {
      func(element);
    }
  });
};

const isEmpty = (element) => {
  if (element.value === '') {
    element.setAttribute('style', 'border: red solid 1px');
    check--;

  } else {
    element.removeAttribute('style');
    check++;
  }
};

const pattern = (element) => {
  const pat = new RegExp(element.getAttribute('pattern'), 'i');
  const value = element.value;

  if (!pat.test(value)){
    element.setAttribute('style', 'border: yellow solid 1px');
    check--;

  } else {
    element.removeAttribute('style');
    check++;
  }
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  check = 0;
  attribute(input, 'required', isEmpty);
  attribute(input, 'pattern', pattern);
  console.log(check);

  if (check === 8) {
    form.submit();
  }
});