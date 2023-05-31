var contador = 0;

function clicar() {
  contador++;
  atualizarMensagem();
}

function zerar() {
  contador = 0;
  atualizarMensagem();
}

function atualizarMensagem() {
  var mensagem = "O contador está com " + contador + " cliques";
  document.getElementById("mensagem").innerHTML = mensagem;
}
