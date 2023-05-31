function atividade_1 (botao){
    let mensagem;

    if(botao == 'btn1'){
        mensagem = 'Você pressionou o botão 1';
    }
    else if(botao == 'btn2'){
        mensagem = 'Você pressionou o botão 2';
    }
    else {
        mensagem = 'Você pressionou o botão 3';
    }

    document.getElementById('resultado').innerText = mensagem;
}