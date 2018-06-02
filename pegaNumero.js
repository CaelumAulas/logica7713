// Library / Biblioteca / lib
function pegaNumero(mensagem) {
    return  parseFloat(prompt(mensagem).replace(",", ".").replace("O", 0))
}

function pegaNumeroInput(input) {
    return  parseFloat(input.value.replace(",", ".").replace("O", 0))
}