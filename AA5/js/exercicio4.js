//atualize esta função
function intervaloNumExercicio4() {

    let valorPrimeiro = window.prompt("Insira um valor numérico: ")
    let valorSegundo = window.prompt("Insira outro valor numérico: ")

    if( valorPrimeiro > 29 && valorPrimeiro < 51 ){
        console.log(valorPrimeiro + " está no intervalo [30,50].")
    } else if(valorPrimeiro > 59 && valorPrimeiro < 101){
        console.log(valorPrimeiro + " está no intervalo [60,100].")
    } else{
        console.log("O número informado não está em nenhum dos dois intervalos.")
    } 
    
    if( valorSegundo > 29 && valorSegundo < 51 ){
        console.log(valorSegundo + " está no intervalo [30,50].")
    } else if(valorSegundo > 59 && valorSegundo < 101){
        console.log(valorSegundo + " está no intervalo [60,100].")
    } else{
        console.log("O número informado não está em nenhum dos dois intervalos.")
    }


}