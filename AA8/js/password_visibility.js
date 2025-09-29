document.addEventListener('DOMContentLoaded', () => {
  const loginBody = document.getElementById('login-body');

  const senhaInput = loginBody.querySelector('#login-password');
  const olho = loginBody.querySelector('#olho');

  const mostrarSenha = () => { senhaInput.type = 'text'; };
  const ocultarSenha = () => { senhaInput.type = 'password'; };

  olho.addEventListener('click', () => {
    if (senhaInput.type === 'password') mostrarSenha();
    else ocultarSenha();
  });

  senhaInput.addEventListener('blur', ocultarSenha);
});