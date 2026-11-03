// Atividade Final - Consulta de endereço por CEP (API pública ViaCEP)
// Fluxo: validar o formato -> fetch -> await -> resposta.ok -> json() -> dados -> DOM
// Três situações diferentes: formato inválido, CEP inexistente e falha de comunicação.

// 1) Encontrar os elementos no DOM (mesmos ids do HTML)
const campoCep = document.querySelector("#cep");
const botaoBuscarCep = document.querySelector("#btnBuscarCep");
const statusCep = document.querySelector("#statusCep");
const resultadoCep = document.querySelector("#resultadoCep");

// 2) async permite usar await: a função espera a resposta sem travar a página
async function buscarCep() {
  // replace(/\D/g, "") remove tudo que não for número (hífen, ponto, espaço)
  const cep = campoCep.value.replace(/\D/g, "");

  // Erro de formato: nem chega a consultar a Internet
  if (cep.length !== 8) {
    statusCep.textContent = "Digite um CEP com 8 números.";
    resultadoCep.textContent = "";
    campoCep.focus();
    return;
  }

  // Estado de carregamento
  statusCep.textContent = "Consultando CEP...";
  resultadoCep.textContent = "";

  // try/catch: o código que pode falhar fica no try; o tratamento, no catch
  try {
    // fetch usa o método GET por padrão; await espera a Promise terminar
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    // resposta.ok é falso quando o HTTP indica erro (ex.: 400, 500)
    if (!resposta.ok) {
      throw new Error("Falha na consulta ao serviço.");
    }

    // json() lê o corpo da resposta e transforma em objeto JavaScript
    const dados = await resposta.json();

    // CEP com formato válido, mas inexistente: o ViaCEP devolve { erro: true }
    if (dados.erro) {
      statusCep.textContent = "CEP não encontrado.";
      resultadoCep.textContent = "";
      return;
    }

    // Sucesso: || mostra um texto alternativo quando o campo vem vazio
    statusCep.textContent = "CEP encontrado.";
    resultadoCep.textContent =
      `${dados.logradouro || "Logradouro não informado"} - ` +
      `${dados.bairro || "Bairro não informado"} - ` +
      `${dados.localidade}/${dados.uf}`;
  } catch (erro) {
    // Falha de comunicação (sem Internet, API fora do ar, resposta inválida)
    statusCep.textContent = "Não foi possível consultar o CEP agora.";
    resultadoCep.textContent = "";
    console.error(erro);
  }
}

// 3) Conectar o clique do botão à função
botaoBuscarCep.addEventListener("click", buscarCep);

// Extra de usabilidade: Enter no campo também consulta
campoCep.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    buscarCep();
  }
});
