const botaoCadastro = document.querySelector("#areaBotaoConta input[type='button']");

botaoCadastro.disabled = true;

function todosCamposValidos() {
    const statusIds = [
        "statusNome",
        "statusSobrenome",
        "statusCPF",
        "statusEmail",
        "statusSenha",
        "statusRepitaSenha"
    ];

    return statusIds.every(id => {
        const el = document.getElementById(id);
        return el && el.classList.contains("status-ok");
    });
}

function atualizarBotaoCadastro() {
    botaoCadastro.disabled = !todosCamposValidos();
}

document.querySelectorAll("input[type='text']").forEach(input => {
    input.addEventListener("blur", atualizarBotaoCadastro);
});

document.querySelector("input[onblur*='validarCPF']").addEventListener("blur", atualizarBotaoCadastro);

document.getElementById("senha").addEventListener("blur", atualizarBotaoCadastro);
document.getElementById("repitaSenha").addEventListener("blur", atualizarBotaoCadastro);
