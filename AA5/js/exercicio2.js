function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");
    console.log(formattedString)
}