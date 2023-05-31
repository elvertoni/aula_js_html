function mostrarNumeros() {
    // Obter o valor do número informado pelo usuário
    let numero = document.getElementById('numero').value;

    // Verificar se o campo foi preenchido
    if (numero) {
        // Converter o valor para um número inteiro
        numero = parseInt(numero);

        // Construir a mensagem com base no número informado
        let mensagem = "O número informado pelo usuário foi " + numero + ". ";
        mensagem += "Antes do número " + numero + ", temos o número " + (numero - 1) + ". ";
        mensagem += "Após o número " + numero + ", temos o número " + (numero + 1) + ".";

        // Exibir a mensagem na página
        document.getElementById('mensagem').innerText = mensagem;
    }
}