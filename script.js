function hideRespostas() {

    document.querySelector('#resposta-form').style.visibility = 'hidden'

}

function sendForm() {

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

    if (mesesAtual < 0) {
        var mesesConvertido = Math.abs(mesesAtual)
        var displayMeses = document.querySelector('#resultado-meses')
        displayMeses.innerHTML = mesesConvertido
    } else {
        var displayMeses = document.querySelector('#resultado-meses')
        displayMeses.innerHTML = mesesAtual
    }


    // Amostragem de Dias
    var diasAtuais = parseFloat(diaAtual - valorDia)

    if (diasAtuais < 0) {
        var diasConvertido = Math.abs(diasAtuais)
        var displayDias = document.querySelector('#resultado-dias')
        displayDias.innerHTML = diasConvertido
    } else {
        var displayDias = document.querySelector('#resultado-dias')
        displayDias.innerHTML = diasAtuais
    }

    // Erros de inputs vazios

    if (document.querySelector('#dia-entrada').value === '') {
        displayDias.innerHTML = '--'
        document.querySelector('.error').style.border = 'solid 1px hsl(0, 100%, 67%)'
        document.querySelector('#error-msg').innerHTML = 'Insira um dia válido'
    }

    if (document.querySelector('#mes-entrada').value === '') {
        displayMeses.innerHTML = '--'
        document.querySelector('#mes-entrada').style.border = 'solid 1px hsl(0, 100%, 67%)'
        document.querySelector('#error-msg-mes').innerHTML = 'Insira um mês válido'
    }

    if (document.querySelector('#ano-entrada').value === '') {
        displayIdade.innerHTML = '--'
        document.querySelector('#ano-entrada').style.border = 'solid 1px hsl(0, 100%, 67%)'
        document.querySelector('#error-msg-ano').innerHTML = 'Insira um ano válido'
    }

}