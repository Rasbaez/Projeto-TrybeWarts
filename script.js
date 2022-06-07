const btnLogin = document.querySelector('#btn-login');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

const emailCerto = 'tryber@teste.com';
const senhaCerta = 123456;

btnLogin.addEventListener('click', (e) => {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  e.preventDefault();
  if (emailValue === emailCerto || passwordValue === senhaCerta) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
