const btnLogin = document.querySelector('#btn-login');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');


btnLogin.addEventListener('input', () => {


  const userEmail = 'tryber@teste.com'
  const userpassword = 123456;
  const emailValue = inputEmail.value;
  const passValue = inputPassword.value;

  if ((emailValue === userEmail) && (passValue === userpassword)) {
    alert('Olá tryber');
  } else {
    alert('Email ou senha inválidos');
  }

})
