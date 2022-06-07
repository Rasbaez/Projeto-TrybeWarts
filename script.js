const btnLogin = document.querySelector('#btn-login');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const formValues = document.querySelector('.trybewarts-login');


function loginValidator() {

  const userEmail = 'tryber@teste.com'
  const userpassword = 123456


  if ((inputEmail === userEmail) && (inputPassword=== userpassword)) {
    alert('Olá tryber')
}else{
    alert('Email ou senha inválidos')
}
}
loginValidator()




