document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-body');
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');
  const loginButton = document.getElementById('botaoLogin');

  function clearFields() {
    if (form && typeof form.reset === 'function') {
      form.reset();
    } else {
      if (emailInput) emailInput.value = '';
      if (passInput) passInput.value = '';
    }
  }

  function toggleButton() {
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const passVal = passInput ? passInput.value.trim() : '';
    const emailOk = emailVal !== '' && (emailVal.split('@').length - 1) === 1;
    const passOk = passVal !== '';

    if (loginButton) loginButton.disabled = !(emailOk && passOk);
  }

  if (emailInput) emailInput.addEventListener('input', toggleButton);
  if (passInput) passInput.addEventListener('input', toggleButton);

  window.addEventListener('pageshow', () => {
    clearFields();
    if (loginButton) loginButton.disabled = true;
    toggleButton();
  });
  
  clearFields();
  if (loginButton) loginButton.disabled = true;
  toggleButton();
  if (form) form.setAttribute('autocomplete', 'off');
});