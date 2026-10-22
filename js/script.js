// Aula 09 - Arrays e objetos
// ARRAY = lista [ ] ; OBJETO = um serviço { } com nome, descricao e categoria
// Aula 11: categoria é o valor usado pelo filtro (curto, sem espaços)
const servicos = [
  {
    nome: "O que é inteligência artificial",
    descricao: "Entenda em linguagem simples como a IA aprende com exemplos e o que ela consegue fazer.",
    categoria: "fundamentos"
  },
  {
    nome: "Limites e erros da IA",
    descricao: "Veja por que a IA pode errar ou inventar informações e como perceber esses sinais.",
    categoria: "fundamentos"
  },
  {
    nome: "Como escrever bons prompts",
    descricao: "Aprenda a pedir o que precisa com contexto, objetivo e formato da resposta.",
    categoria: "pratica"
  },
  {
    nome: "Escolhendo uma ferramenta de IA",
    descricao: "Descubra como comparar assistentes de IA e escolher o mais adequado para sua tarefa.",
    categoria: "pratica"
  },
  {
    nome: "Uso seguro e responsável",
    descricao: "Saiba proteger seus dados e conferir as informações antes de confiar na resposta.",
    categoria: "seguranca"
  }
];

// Teste dos dados no Console (F12). Pode apagar depois de conferir.
console.table(servicos);
console.log(servicos[0].nome);      // primeiro serviço: índice 0
console.log(servicos[0].categoria); // Aula 11: categoria do primeiro serviço
console.log(servicos[1].descricao); // descrição do segundo serviço

// forEach = "para cada serviço da lista, execute o bloco"
servicos.forEach((servico) => {
  console.log(servico.nome);
});

// Aula 08 - O Portal toma decisões
// 1) Encontrar os elementos no DOM (mesmos ids do HTML)
const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

// 2) Escutar o clique, ler a escolha e decidir a resposta
botaoConsultar.addEventListener("click", () => {
  const escolha = campoServico.value;

  if (escolha === "") {
    resultado.textContent = "Escolha um serviço antes de consultar.";
  } else if (escolha === "o-que-e-ia") {
    resultado.textContent = "A inteligência artificial aprende padrões a partir de muitos exemplos. Ela ajuda a gerar textos, imagens e respostas, mas não entende o mundo como uma pessoa.";
  } else if (escolha === "prompts") {
    resultado.textContent = "Um bom prompt diz quem você é, o que precisa, para quê e em qual formato quer a resposta. Se o resultado não ajudar, refine o pedido com mais detalhes.";
  } else if (escolha === "seguranca") {
    resultado.textContent = "Não compartilhe senhas nem dados pessoais com a IA e sempre confira as informações importantes em fontes confiáveis antes de usar.";
  } else {
    resultado.textContent = "Serviço não identificado.";
  }
});

// Aula 10 - Funções + DOM: dados viram cards
// Container vazio do HTML (id="listaServicos")
const listaServicos = document.querySelector("#listaServicos");

// Aula 11: a função recebe a lista que deve aparecer na tela
// (o array completo ou um novo array criado pelo filter)
function renderizarServicos(lista) {
  // Limpa o container para não duplicar cards se a função rodar de novo
  listaServicos.innerHTML = "";

  // Lista vazia: mostra uma orientação e encerra a função com return
  if (lista.length === 0) {
    listaServicos.textContent =
      "Nenhum serviço foi encontrado nesta categoria.";
    return;
  }

  // Para cada serviço da lista, cria um card
  lista.forEach((servico) => {
    const card = document.createElement("article");
    card.classList.add("card-servico");

    const titulo = document.createElement("h3");
    titulo.textContent = servico.nome;

    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    card.append(titulo, descricao);
    listaServicos.appendChild(card);
  });
}

renderizarServicos(servicos);

// Aula 11 - Filtro interativo por categoria
// 1) Encontrar o select e o parágrafo da mensagem (mesmos ids do HTML)
const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

// 2) change: dispara quando o usuário troca a opção do select
filtroCategoria.addEventListener("change", () => {
  // value devolve o value da opção selecionada
  const categoriaEscolhida = filtroCategoria.value;

  if (categoriaEscolhida === "todos") {
    renderizarServicos(servicos);
    mensagemFiltro.textContent = "Mostrando todos os serviços.";
  } else {
    // filter cria um NOVO array; o array servicos original não muda
    const servicosFiltrados = servicos.filter((servico) => {
      return servico.categoria === categoriaEscolhida;
    });

    renderizarServicos(servicosFiltrados);
    mensagemFiltro.textContent =
      servicosFiltrados.length + " serviço(s) encontrado(s).";
  }
});

// Aula 13 - LocalStorage: o navegador lembra uma preferência simples
// (nunca guarde senha, CPF ou dados pessoais sensíveis aqui)
const campoFavorito = document.querySelector("#servicoFavorito");
const botaoFavorito = document.querySelector("#btnSalvarFavorito");
const mensagemFavorito = document.querySelector("#favoritoSalvo");

// Salvar: setItem(chave, valor)
botaoFavorito.addEventListener("click", () => {
  const favorito = campoFavorito.value;

  if (favorito === "") {
    mensagemFavorito.textContent = "Escolha um serviço primeiro.";
    return;
  }

  localStorage.setItem("servicoFavorito", favorito);
  // selectedOptions[0] é a opção marcada; textContent é o texto que o usuário vê
  mensagemFavorito.textContent =
    `Favorito salvo: ${campoFavorito.selectedOptions[0].textContent}`;
});

// Recuperar: getItem(chave) devolve o valor salvo (ou null se não existir)
const favoritoSalvo = localStorage.getItem("servicoFavorito");

if (favoritoSalvo) {
  campoFavorito.value = favoritoSalvo;

  // Se o valor salvo não existir mais nas opções, o select volta para ""
  if (campoFavorito.value !== "") {
    mensagemFavorito.textContent =
      `Seu serviço favorito é: ${campoFavorito.selectedOptions[0].textContent}`;
  }
}
