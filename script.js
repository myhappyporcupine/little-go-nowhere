const usernameInput = document.querySelector('#username-input');
const usernameLogin = document.querySelector('#username-login');
const joplinWelcome = document.querySelector('#joplin-welcome');

let username = '[Username]';

function updateUsername() {
  const usernameElements = document.querySelectorAll('.username');
  for (element of usernameElements) { element.textContent = username; };
}

function handleUsername() {
  username = usernameInput.value;
  updateUsername();
  joplinWelcome.style.display = 'block';
}

usernameLogin.addEventListener('click', handleUsername);
