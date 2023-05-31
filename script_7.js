function verificarNumero() {
  let numero = parseFloat(document.getElementById("numero").value);

  if (numero >= 20 && numero <= 90) {
    document.getElementById("mensagem").innerHTML =
      "O número está compreendido entre 20 e 90 (inclusive).";
  } else {
    document.getElementById("mensagem").innerHTML =
      "O número não está compreendido entre 20 e 90 (inclusive).";
  }
}
