function mostrarApenasHome() {
    document.getElementById("nova-conta").classList.add("oculto");
    document.getElementById("login-body").classList.add("oculto");
    document.getElementById("divHome").classList.remove("oculto");
}

function mostrarApenasLogin() {
    document.getElementById("login-body").classList.remove("oculto");
    document.getElementById("nova-conta").classList.add("oculto");
    document.getElementById("divHome").classList.add("oculto");
}

function mostrarApenasConta() {
    document.getElementById("nova-conta").classList.remove("oculto");
    document.getElementById("login-body").classList.add("oculto");
    document.getElementById("divHome").classList.add("oculto");
}

function validaTextoEmBranco(input, statusId, label) {
    const status = document.getElementById(statusId);

    if (input.value.trim() === "") {
        status.textContent = `Informe um ${label}.`;
        status.classList.add("status-fail");
        status.classList.remove("status-ok");
    } else {
        status.textContent = "";
        status.classList.remove("status-fail");
        status.classList.add("status-ok");
    }
}

mostrarApenasHome();