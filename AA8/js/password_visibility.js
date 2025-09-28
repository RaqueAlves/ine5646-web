const senhaInput = document.getElementById('login-password');
const olho = document.getElementById('olho');

function mostrarSenha() {
    senhaInput.type = 'text';
}

function ocultarSenha() {
    senhaInput.type = 'password';
}

olho.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
        mostrarSenha();
    } else {
        ocultarSenha();
    }
});

senhaInput.addEventListener('blur', () => {
    ocultarSenha();
});