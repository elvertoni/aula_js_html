function troco() {
    // Obter o valor do número informado pelo usuário
    let produto = document.getElementById('nomeProduto').value;
    let preco = document.getElementById('preco').value;
    let pagamento = document.getElementById('pagamento').value;

    // Converter o valor para um número inteiro
    preco = parseFloat(preco);
    pagamento = parseFloat(pagamento);

    let troco = pagamento - preco;

    // Construir a mensagem com base no número informado
    let mensagem = "Você comprou um(a) " + produto + " por R$ " + preco.toFixed(2) + " e entregou ao vendedor R$ " + pagamento.toFixed(2) + " em dinheiro. Você vai receber R$ " + troco.toFixed(2) + " de troco. Volte sempre!";

    // Exibir a mensagem na página
    document.getElementById('mensagem').innerText = mensagem;
}