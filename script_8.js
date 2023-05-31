function mostrarTabuada() {
    // Obtém o número informado pelo usuário
    let numero = parseInt(document.getElementById("numero").value);

    // Limpa o parágrafo
    document.getElementById("tabuada").innerHTML = "";

    // Cria a tabuada e insere no parágrafo
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      let linha = numero + " x " + i + " = " + resultado;
      document.getElementById("tabuada").innerHTML += linha + "<br/>";
    }
  }
