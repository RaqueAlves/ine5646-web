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

mostrarApenasHome();