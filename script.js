const btnLogin = document.querySelector('#btn-login');
const btnSubmit = document.querySelector('#submit-btn');
const concorda = document.querySelector('#agreement');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const mainContent = document.querySelector('main');
const mainForm = document.querySelector('#evaluation-form');
const textAreaInp = document.querySelector('#textarea');

const formData = document.createElement('form');
formData.setAttribute('id', 'form-data');
mainContent.appendChild(formData);

const radiosFamily = document.querySelectorAll('input[name="family"]');
const userNameInput = document.querySelector('#input-name');
const userLastNameInput = document.querySelector('#input-lastname');
const userEmailInput = document.querySelector('#input-email');
const radiosRate = document.querySelectorAll('input[name="rate"]');
const userComents = document.querySelector('#textarea');
const userHouse = document.querySelector('#house');
const subjects = document.querySelectorAll('.subject');

btnSubmit.disabled = true;
btnSubmit.style.backgroundColor = 'gray';
btnSubmit.style.backgroundColor = 'gray';
btnSubmit.style.color = '#ffffff80';

btnLogin.addEventListener('click', (e) => {
  const emailCerto = 'tryber@teste.com';
  const senhaCerta = 123456;
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
  if (concorda.checked) {
    btnSubmit.disabled = false;
    btnSubmit.style.backgroundColor = '#470047';
    btnSubmit.style.color = '#ffffff';
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.backgroundColor = 'gray';
    btnSubmit.style.color = '#ffffff80';
  }
});

const limitText = () => {
  const caracteres = textAreaInp.value.length;
  const limit = 500;
  const rest = limit - caracteres;
  const count = document.querySelector('#counter');
  count.innerText = `Caracteres restantes: ${rest}`;
};
textAreaInp.addEventListener('input', limitText);

const showName = () => {
  const pName = document.createElement('p');
  formData.appendChild(pName);
  pName.innerHTML = `Nome: ${userNameInput.value} ${userLastNameInput.value},`;
};

const showEmail = () => {
  const pEmail = document.createElement('p');
  formData.appendChild(pEmail);
  pEmail.innerHTML = `Email: ${userEmailInput.value},`;
};

const showFamily = () => {
  for (let i = 0; i < radiosFamily.length; i += 1) {
    if (radiosFamily[i].checked) {
      const pFamily = document.createElement('p');
      formData.appendChild(pFamily);
      pFamily.innerText = `Família: ${radiosFamily[i].value},`;
    }
  }
};

const showHouse = () => {
  const pHouse = document.createElement('p');
  formData.appendChild(pHouse);
  pHouse.innerHTML = `Casa: ${userHouse.value},`;
};

const showTechs = () => {
  const pUserTech = document.createElement('p');
  formData.appendChild(pUserTech);
  const optionsCheked = [];

  for (let i = 0; i < subjects.length; i += 1) {
    const checkedInp = subjects[i];
    if (checkedInp.checked === true) {
      optionsCheked.push(`${checkedInp.value}`);
      pUserTech.innerHTML = `Matérias: ${optionsCheked.join(', ')},`;
    }
  }
};

const showRate = () => {
  for (let i = 0; i < radiosRate.length; i += 1) {
    if (radiosRate[i].checked) {
      const pRate = document.createElement('p');
      formData.appendChild(pRate);
      pRate.innerText = `Avaliação: ${radiosRate[i].value},`;
    }
  }
};

const showObservations = () => {
  const pUserObs = document.createElement('p');
  formData.appendChild(pUserObs);
  pUserObs.innerText = `Observações: ${userComents.value}`;
};

const removeForm = () => {
  mainForm.style.display = 'none';
};

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  removeForm();

  showName();
  showEmail();
  showFamily();
  showHouse();
  showTechs();
  showRate();
  showObservations();
});
