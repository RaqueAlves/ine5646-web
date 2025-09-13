function haOnzeDigitos(cpf) {
    //---- edite aqui para a validação do exercício 9a
    let str = cpf.toString();
    if (str.length == 11) {
        return true;
    }
    return false
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    //---- edite aqui para a validação do exercício 9b
    if (cpf % 1 == 0) {
        return true
    }
    return false
}

function osOnzeNumerosSaoDiferentes(cpf) {
    //---- edite aqui para a validação do exercício 9c
    let digitosDiferentesDoPrimeiro = []

    let primeiroDigito = cpf[0];
    for (i = 1; i < 11; i++) {
        if (cpf[i] != primeiroDigito) {
            digitosDiferentesDoPrimeiro.push(cpf[i])
        }
    }
    if (digitosDiferentesDoPrimeiro != null) {
        return true
    }
    return false
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9d
    let soma = 0
    let indice = 0
    for (let i = 10; i > 1; i--) {
        soma += parseInt(cpf[indice]) * i;
        indice++
    }
    let resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto == cpf[9]) {
        return true
    }
    return false
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9e
    let soma = 0
    let indice = 0
    for (let i = 11; i > 1; i--) {
        soma += parseInt(cpf[indice]) * i;
        indice++
    }
    let resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto == cpf[10]) {
        return true
    }
    return false
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}