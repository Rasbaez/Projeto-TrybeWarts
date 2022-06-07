const btnLogin = document.querySelector('#btn-login');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

let emailCerto = 'tryber@teste.com'
let senhaCerta = 123456

btnLogin.addEventListener('click', (e) => {

  let emailValue = inputEmail.value;
  let passwordValue = inputPassword.value;

  
  e.preventDefault()
  if (emailValue == emailCerto && passwordValue == senhaCerta) {
    alert('Olá tryber');
  } else {
    alert('Email ou senha inválidos');
  }

})
