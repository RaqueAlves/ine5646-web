
function tratadorDeCliqueExercicio3() {
    let valorString = window.prompt("Insira uma palavra: ");
    let novaString = "";

    for (let i = 1; i < valorString.length - 1; i++) {
        novaString += valorString[i];
    }

    alert(novaString);
}