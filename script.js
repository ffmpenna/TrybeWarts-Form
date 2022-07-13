function verifyLogin() {
  const email = document.getElementsByTagName('input')[0].value;
  const pass = document.getElementsByTagName('input')[1].value;
  if (email === 'tryber@teste.com' && pass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

document.getElementsByTagName('button')[0].addEventListener('click', verifyLogin);
