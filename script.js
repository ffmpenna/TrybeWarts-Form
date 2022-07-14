function verifyLogin() {
  const email = document.getElementsByTagName('input')[0].value;
  const pass = document.getElementsByTagName('input')[1].value;
  if (email === 'tryber@teste.com' && pass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

document
  .getElementsByTagName('button')[0]
  .addEventListener('click', verifyLogin);

function countChars() {
  const obj = document.getElementById('textarea');
  const maxChar = 500;
  const counter = document.querySelector('#counter');
  counter.innerHTML = maxChar - obj.value.length;
  console.log(maxChar - obj.value.length);
}

document.getElementById('textarea').addEventListener('keyup', countChars);

let count = 0;
function agreement() {
  count += 1;
  const submitBtn = document.getElementById('submit-btn');
  if (count % 2 !== 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.getElementById('agreement').addEventListener('click', agreement);

function getSubjects() {
  const subjects = document.querySelectorAll('input[class="subject"]:checked');
  const subjectsChecked = [];
  for (let index = 0; index < subjects.length; index += 1) {
    subjectsChecked.push(` ${subjects[index].value}`);
  }
  return subjectsChecked;
}

function getValues() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const values = [
    `${name} ${lastName}`,
    document.querySelector('#input-email').value,
    document.querySelector('#house').value,
    document.querySelector('input[name="family"]:checked').value,
    getSubjects(),
    document.querySelector('input[name="rate"]:checked').value,
    document.getElementById('textarea').value,
  ];

  return values;
}

function writeNewPage(array, form) {
  const formResult = [
    'Nome: ',
    'Email: ',
    'Casa: ',
    'Família: ',
    'Matérias: ',
    'Avaliação: ',
    'Observações: ',
  ];
  for (let index = 0; index < array.length; index += 1) {
    const createParagraph = document.createElement('p');
    form.appendChild(createParagraph);
    createParagraph.innerText = formResult[index] + array[index];
  }
}

function updates(event) {
  event.preventDefault();
  const inputsForm = getValues();
  const oldForm = document.querySelector('#evaluation-form');
  const main = document.querySelector('main');
  const newForm = document.createElement('form');
  newForm.setAttribute('id', 'form-data');

  main.prepend(newForm);
  oldForm.style.display = 'none';
  writeNewPage(inputsForm, newForm);
}

document.getElementById('submit-btn').addEventListener('click', updates);
