import { landingPage } from './landing.js';
import { register } from './register.js';

export const routes = (hash) => {
  const menuRegister = document.getElementById('root');
  menuRegister.innerHTML = '';
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    menuRegister.appendChild(landingPage());
  } else if (hash === '#/landing') {
    menuRegister.appendChild(landingPage());
  } else if (hash === '#/register') {
    menuRegister.appendChild(register());
  }
};
