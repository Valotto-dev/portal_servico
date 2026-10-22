// Aula 12 - Validação do formulário com JavaScript
// Este arquivo só é carregado em contato.html (é onde o formulário existe).
// A validação HTML (required, type="email") continua funcionando.

// 1) Encontrar os elementos no DOM (mesmos ids do HTML)
const formulario = document.querySelector("#formContato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const mensagemForm = document.querySelector("#mensagemForm");

// 2) Escutar o envio do formulário
formulario.addEventListener("submit", (evento) => {
  // Impede o comportamento padrão (recarregar a página)
  evento.preventDefault();

  // 3) Ler os valores. trim() remove espaços no começo e no fim
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const assunto = campoAssunto.value;
  const texto = campoMensagem.value.trim();

  // 4) Validar: SE algum estiver vazio, orienta e para com return
  if (nome === "" || email === "" || assunto === "" || texto === "") {
    mensagemForm.textContent =
      "Preencha os campos obrigatórios antes de continuar.";
    return;
  }

  // 5) SENÃO, mostra a confirmação
  mensagemForm.textContent =
    `Obrigado, ${nome}! Sua solicitação foi registrada.`;
});
