function mostrarMensagem() {
    // Obter os valores do nome e idade do usuário
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
  
    // Verificar se os campos foram preenchidos
    if (nome && idade) {
      // Construir a mensagem com base nos valores obtidos
      let mensagem = "Acabei de conhecer " + nome + ", que tem " + idade + " anos de idade.";
  
      // Exibir a mensagem na página
      document.getElementById('mensagem').innerText = mensagem;
    }
  }