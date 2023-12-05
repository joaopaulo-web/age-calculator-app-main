function hideRespostas() {
    document.querySelector('#resposta-form').style.visibility = 'hidden';
}

function resetErrorState() {
    document.querySelector('.error').style.border = 'none';
    document.querySelector('#error-msg').innerHTML = '';

    document.querySelector('#mes-entrada').style.border = 'none';
    document.querySelector('#error-msg-mes').innerHTML = '';

    document.querySelector('#ano-entrada').style.border = 'none';
    document.querySelector('#error-msg-ano').innerHTML = '';
}

function sendForm() {
    // Redefine o estado de erro
    resetErrorState();

    document.querySelector('#resposta-form').style.visibility = 'visible';

    // Atribui o ano, mes e dia atual
    const date = new Date();
    const anoAtual = parseFloat(date.getFullYear());
    const mesAtual = date.getMonth() + 1;
    const diaAtual = parseFloat(date.getDate());

    // Pega os valores do formulário
    var valorDia = parseFloat(document.querySelector('#dia-entrada').value);
    var valorMes = parseFloat(document.querySelector('#mes-entrada').value);
    var valorAno = parseFloat(document.querySelector('#ano-entrada').value);

    // Amostragem de Anos
    var idadeAtual = parseFloat(anoAtual - valorAno);
    var displayIdade = document.querySelector('#resultado-anos');
    displayIdade.innerHTML = idadeAtual;

    // Amostragem de Meses
    var mesesAtual = parseFloat(valorMes - mesAtual);

    //Transforma o número negativo em positivo e valida se o resultado escrito será no singular ou no plural
    if (mesesAtual < 0) {

        var mesesConvertido = Math.abs(mesesAtual);
        var displayMeses = document.querySelector('#resultado-meses');
        displayMeses.innerHTML = mesesConvertido;

        var mesSingular = document.querySelector('#resposta-meses')
        mesSingular.innerHTML = 'mês'

        if (mesesConvertido > 1) {
            var mesSingular = document.querySelector('#resposta-meses')
            mesSingular.innerHTML = 'meses'
        }

    }

    // Amostragem de Dias
    var diasAtual = parseFloat(diaAtual - valorDia);
    //Transforma o número negativo em positivo

    if (diasAtual < 0) {

        var diasConvertido = Math.abs(diasAtual);
        var displayDias = document.querySelector('#resultado-dias');
        displayDias.innerHTML = diasConvertido;

        var diaSingular = document.querySelector('#resposta-dias')
        diaSingular.innerHTML = 'dia'

        if (diasConvertido > 1) {

            var diaSingular = document.querySelector('#resposta-dias')
            diaSingular.innerHTML = 'dias'
        }

    }

    // Erros de inputs vazios
    if (document.querySelector('#dia-entrada').value === '') {
        displayDias.innerHTML = '--';
        document.querySelector('.error').style.border = 'solid 1px hsl(0, 100%, 67%)';
        document.querySelector('#error-msg').innerHTML = 'Insira um dia válido';
    }

    if (document.querySelector('#mes-entrada').value === '') {
        displayMeses.innerHTML = '--';
        document.querySelector('#mes-entrada').style.border = 'solid 1px hsl(0, 100%, 67%)';
        document.querySelector('#error-msg-mes').innerHTML = 'Insira um mês válido';
    }

    if (document.querySelector('#ano-entrada').value === '') {
        displayIdade.innerHTML = '--';
        document.querySelector('#ano-entrada').style.border = 'solid 1px hsl(0, 100%, 67%)';
        document.querySelector('#error-msg-ano').innerHTML = 'Insira um ano válido';
    }
}