class CPFValidator {
    constructor(input) {
        this.input = input;
        this.cpf = input.value.trim().replace(/\D/g, '');
        this.alerta = document.getElementById("statusCPF");
        this.mensagens = {
            onzeDigitos: "O CPF deve ter 11 dígitos.",
            onzeSaoNumeros: "O CPF deve conter apenas números.",
            naoSaoTodosIguais: "Os dígitos do CPF não podem ser todos iguais.",
            verificador10: "O primeiro dígito verificador é inválido.",
            verificador11: "O segundo dígito verificador é inválido."
        };
    }

    haOnzeDigitos() {
        return this.cpf.length === 11;
    }

    todosOsOnzeDigitosSaoNumeros() {
        return /^\d{11}$/.test(this.cpf);
    }

    osOnzeNumerosSaoDiferentes() {
        return !this.cpf.split('').every(d => d === this.cpf[0]);
    }

    oPrimeiroDigitoVerificadorEhValido() {
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(this.cpf[i]) * (10 - i);
        }
        let resto = (soma * 10) % 11;
        if (resto === 10) resto = 0;
        return resto === parseInt(this.cpf[9]);
    }

    oSegundoDigitoVerificadorEhValido() {
        let soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(this.cpf[i]) * (11 - i);
        }
        let resto = (soma * 10) % 11;
        if (resto === 10) resto = 0;
        return resto === parseInt(this.cpf[10]);
    }

    validar() {
        if (!this.haOnzeDigitos()) {
            this.exibirMensagem("onzeDigitos");
            return false;
        } 
        if (!this.todosOsOnzeDigitosSaoNumeros()) {
            this.exibirMensagem("onzeSaoNumeros");
            return false;
        } 
        if (!this.osOnzeNumerosSaoDiferentes()) {
            this.exibirMensagem("naoSaoTodosIguais");
            return false;
        } 
        if (!this.oPrimeiroDigitoVerificadorEhValido()) {
            this.exibirMensagem("verificador10");
            return false;
        } 
        if (!this.oSegundoDigitoVerificadorEhValido()) {
            this.exibirMensagem("verificador11");
            return false;
        }

        this.alerta.textContent = "OK";
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

function validarCPF(input) {
    const validator = new CPFValidator(input);
    validator.validar();
}