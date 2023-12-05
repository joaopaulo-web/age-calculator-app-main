function hideRespostas() {

    document.querySelector('#resposta-form').style.visibility = 'hidden'

}

function sendForm(){

    document.querySelector('#resposta-form').style.visibility = 'visible'

    // Atribui o ano, mes e dia atual
    const date = new Date()

    const anoAtual = parseFloat(date.getFullYear())

    const mesAtual = date.getMonth() + 1

    const diaAtual = parseFloat(date.getDate())


    // Pega os valores do formulário
    var valorDia = parseFloat(document.querySelector('#dia-entrada').value)

    var valorMes = parseFloat(document.querySelector('#mes-entrada').value)

    var valorAno = parseFloat(document.querySelector('#ano-entrada').value)


    // Amostragem de Anos
    var idadeAtual = parseFloat(anoAtual - valorAno)

    var displayIdade = document.querySelector('#resultado-anos')
    displayIdade.innerHTML = idadeAtual


    // Amostragem de Meses
    var mesesAtual = parseFloat(valorMes - mesAtual)
    
    var displayMeses = document.querySelector('#resultado-meses')
    displayMeses.innerHTML = mesesAtual


    // Amostragem de Dias
    var diasAtuais = parseFloat( diaAtual - valorDia)

    var displayDias = document.querySelector('#resultado-dias')
    displayDias.innerHTML = diasAtuais

}