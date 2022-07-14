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
  if (count % 2 !== 0) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

document.getElementById('agreement').addEventListener('click', agreement);
