function troco() {
    // Obter o valor do número informado pelo usuário
    let produto = document.getElementById('nomeProduto').value;
    let preco = document.getElementById('preco').value;
    
    // Converter o valor para um número inteiro
    preco = parseFloat(preco);
    
    let valorComDesconto = (preco - preco * 0.10);

    // Construir a mensagem com base no número informado
    let mensagem = "Você comprou um produto (" + produto +") por R$ " + preco.toFixed(2)  + " e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$ " + valorComDesconto.toFixed(2) +" pelo seu produto. Volte sempre!";

    // Exibir a mensagem na página
    document.getElementById('mensagem').innerText = mensagem;
}