const btnLogin = document.querySelector('#btn-login');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
<<<<<<< HEAD
const formValues = document.querySelector('.trybewarts-login');
=======
>>>>>>> 653d362c3c8e7ae8b76da1e61bea3fc60285488c

let emailCerto = 'tryber@teste.com'
let senhaCerta = 123456

<<<<<<< HEAD
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



=======
btnLogin.addEventListener('click', (e) => {

  let emailValue = inputEmail.value;
  let passwordValue = inputPassword.value;

  
  e.preventDefault()
  if (emailValue == emailCerto && passwordValue == senhaCerta) {
    alert('Olá tryber');
  } else {
    alert('Email ou senha inválidos');
  }
>>>>>>> 653d362c3c8e7ae8b76da1e61bea3fc60285488c

