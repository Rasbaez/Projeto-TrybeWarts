const btnLogin = document.querySelector('#btn-login');
const btnSubmit = document.querySelector('#submit-btn');
const concorda = document.querySelector('#agreement');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const emailCerto = 'tryber@teste.com';
const senhaCerta = 123456;

btnSubmit.disabled = true

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

// Verifica se concorda com os termos
  concorda.addEventListener('click', () => { 
    if (concorda.checked){
      btnSubmit.disabled = false
    } else {
      btnSubmit.disabled = true
    }
  })