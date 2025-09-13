function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    //edite esta função!
    let regiaoFiscal = undefined
    console.log(cpfInformado)

    valor = cpfInformado[8]
    switch (valor) {
        case "1":
            regiaoFiscal = "DF, GO, MT, MS e TO" 
            console.log("DF, GO, MT, MS e TO")
            break;
        case "2":
            regiaoFiscal = "AC, AP, AM, PA, RO e RR" 
            console.log("AC, AP, AM, PA, RO e RR")
            break;
        case "3":
            regiaoFiscal = "CE, MA e PI" 
            console.log("CE, MA e PI")
            break;
        case "4":
            regiaoFiscal = "AL, PB, PE e RN" 
            console.log("AL, PB, PE e RN")
            break;
        case "5":
            regiaoFiscal = "BA e SE" 
            console.log("BA e SE")
            break;
        case "6":
            regiaoFiscal = "MG" 
            console.log("MG")
            break;
        case "7":
            regiaoFiscal = "ES e RJ" 
            console.log("ES e RJ")
            break;
        case "8":
            regiaoFiscal = "SP"
            console.log("SP")
            break;
        case "9":
            regiaoFiscal = "PR e SC" 
            console.log("PR e SC")
            break;
        default:
            regiaoFiscal = "RS" 
            console.log("RS")
            break;
    }


    //----------------------------
    return regiaoFiscal
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
