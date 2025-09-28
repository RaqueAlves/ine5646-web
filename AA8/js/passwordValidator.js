class PasswordValidator {
    constructor(input) {
        this.input = input;
        this.alerta = document.getElementById("statusSenha");
        this.mensagens = {
            oitoDigitos: "A senha deve ter 8 dígitos ou mais.",
            minusculaMaiuscula: "Deve conter letras maiúsculas e minúsculas.",
            deveConteNumeros: "Deve conter ao menos um número.",
            deveConteSimbolos: "Insira algum caracter especial: '*', '-', ..."
        };
        
        this.input.addEventListener("blur", () => this.validar());
    }

    senhaOriginal() {
        return this.input.value;
    }

    haOitoDigitos() {
        return this.senhaOriginal().length >= 8;
    }

    contemMinusculaMaiuscula() {
        return /[a-z]/.test(this.senhaOriginal()) && /[A-Z]/.test(this.senhaOriginal());
    }

    haNumeros() {
        return /\d/.test(this.senhaOriginal());
    }

    contemSimbolos() {
        return /[!@#$%^&*(),.?":{}|<>_\-]/.test(this.senhaOriginal());
    }

    validar() {
        if (!this.haOitoDigitos()) {
            this.exibirMensagem("oitoDigitos");
            return false;
        }
        if (!this.contemMinusculaMaiuscula()) {
            this.exibirMensagem("minusculaMaiuscula");
            return false;
        }
        if (!this.haNumeros()) {
            this.exibirMensagem("deveConteNumeros");
            return false;
        }
        if (!this.contemSimbolos()) {
            this.exibirMensagem("deveConteSimbolos");
            return false;
        }

        this.alerta.textContent = "";
        this.alerta.classList.remove("status-fail");
        this.alerta.classList.add("status-ok");
        return true;
    }

    exibirMensagem(tipo) {
        this.alerta.textContent = this.mensagens[tipo];
        this.alerta.classList.add("status-fail");
        this.alerta.classList.remove("status-ok");
    }
}

function validarRepitaSenha(originalInput, repitaInput) {
    const alerta = document.getElementById("statusRepitaSenha");

    repitaInput.addEventListener("blur", () => {
        if (repitaInput.value !== originalInput.value) {
            alerta.textContent = "As senhas não coincidem.";
            alerta.classList.add("status-fail");
            alerta.classList.remove("status-ok");
        } else {
            alerta.textContent = "";
            alerta.classList.remove("status-fail");
            alerta.classList.add("status-ok");
        }
    });
}

const senhaInput = document.getElementById("senha");
const repitaSenhaInput = document.getElementById("repitaSenha");

new PasswordValidator(senhaInput);
validarRepitaSenha(senhaInput, repitaSenhaInput);