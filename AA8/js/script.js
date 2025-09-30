function mostrarApenasHome() {
    document.getElementById("nova-conta").classList.add("oculto");
    document.getElementById("login-body").classList.add("oculto");
    document.getElementById("divHome").classList.remove("oculto");
    
    limparCadastro(); 
    limparLogin();
}

function mostrarApenasLogin() {
    document.getElementById("login-body").classList.remove("oculto");
    document.getElementById("nova-conta").classList.add("oculto");
    document.getElementById("divHome").classList.add("oculto");
    
    limparLogin();
    limparCadastro(); 
}

function mostrarApenasConta() {
    document.getElementById("nova-conta").classList.remove("oculto");
    document.getElementById("login-body").classList.add("oculto");
    document.getElementById("divHome").classList.add("oculto");
    
    limparCadastro(); 
    limparLogin();
}
function limparCadastro() { 
    const cadastroDiv = document.getElementById("nova-conta"); 
    
    if (!cadastroDiv) return; 
    
    cadastroDiv.querySelectorAll("input:not([type='button']):not([type='submit'])").forEach(input => input.value = "");
    cadastroDiv.querySelectorAll("p").forEach(p => { 
        p.textContent = ""; 
        p.classList.remove("status-ok", "status-fail");
    }); 
    
    const botaoCadastro = cadastroDiv.querySelector("#areaBotaoConta input[type='button']"); 
    
    if (botaoCadastro) botaoCadastro.disabled = true; 
} 

function limparLogin() { 
    const loginDiv = document.getElementById("login-body"); 
    
    if (!loginDiv) return; 
    loginDiv.querySelectorAll("input").forEach(input => input.value = ""); 
    loginDiv.querySelectorAll("p").forEach(p => { 
        p.textContent = ""; p.classList.remove("status-ok", "status-fail"); 
    }); 
    
    const botaoLogin = loginDiv.querySelector("input[type='button'], button"); 
    
    if (botaoLogin) botaoLogin.disabled = true; 
}

function validaTextoEmBranco(input, statusId, label) {
    const status = document.getElementById(statusId);

    if (input.value.trim() === "") {
        status.textContent = `Informe um ${label}.`;
        status.classList.add("status-fail");
        status.classList.remove("status-ok");
    } else {
        status.textContent = "OK";
        status.classList.remove("status-fail");
        status.classList.add("status-ok");
    }
}

function validarEmail(input) { 
    const status = document.getElementById("statusEmail"); 
    const emailVal = input.value.trim(); 
    const emailOk = emailVal !== '' && (emailVal.split('@').length - 1) === 1; 
    
    if (emailOk) { 
        status.textContent = "OK"; status.classList.remove("status-fail"); status.classList.add("status-ok"); 
    } else { 
        status.textContent = "Informe um e-mail válido."; status.classList.add("status-fail"); status.classList.remove("status-ok"); 
    } 
}

class Conta { 
    constructor(nome, sobrenome, cpfObj, email, senha) { 
        this.nome = nome; 
        this.sobrenome = sobrenome; 
        this.cpf = cpfObj; 
        this.email = email; 
        this.senha = senha; 
    } 
}

document.addEventListener("DOMContentLoaded", () => { 
    const botaoCadastro = document.querySelector("#areaBotaoConta input[type='button']"); 
    const nomeInput = document.querySelector("input[onblur*='Nome']"); 
    const sobrenomeInput = document.querySelector("input[onblur*='Sobrenome']"); 
    const cpfInput = document.querySelector("input[onblur*='validarCPF']"); const emailInput = document.querySelector("input[onblur*='validarEmail']"); 
    const senhaInput = document.getElementById("senha"); 
    
    if (!botaoCadastro) return; botaoCadastro.addEventListener("click", () => { 
        const cpfObj = new CPFValidator(cpfInput); 
        const novaConta = new Conta( 
            nomeInput.value.trim(), 
            sobrenomeInput.value.trim(), 
            cpfObj, emailInput.value.trim(), 
            senhaInput.value 
        ); 
    
    console.log("Nova conta criada:", novaConta);
    limparCadastro();
    });
});

mostrarApenasHome();