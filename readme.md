# Guia de Inteligência Artificial para Iniciantes

## Sobre o projeto
Portal de Serviços Digitais desenvolvido na disciplina de Programação Web Front-End (ADS).
O tema é um guia para quem está começando a usar inteligência artificial, sem precisar saber programar.
O Portal reúne um catálogo de serviços com filtro por categoria, um canal de contato com validação,
a opção de salvar um serviço favorito no navegador e uma consulta de endereço por CEP feita com uma API pública.

## Tecnologias utilizadas
- HTML5 semântico
- CSS3 (arquivo externo)
- JavaScript (arquivos separados em `js/`)
- Git e GitHub
- GitHub Pages
- API ViaCEP

## Funcionalidades
- Navegação entre as páginas Início, Serviços e Contato
- Consulta de serviço com `if / else if / else`
- Catálogo de serviços criado pelo JavaScript a partir de um array de objetos (`renderizarServicos()`)
- Filtro por categoria com `filter`
- Formulário de contato com `required`, `type="email"` e validação JavaScript (`preventDefault` e `trim`)
- Serviço favorito salvo com LocalStorage (permanece após atualizar a página)
- Consulta de CEP com API (carregamento e tratamento de erros)

## API utilizada
O [ViaCEP](https://viacep.com.br/) é um Web Service público que recebe um CEP e devolve os dados do endereço em JSON
(`logradouro`, `bairro`, `localidade`, `uf`). A consulta é feita pelo navegador com `fetch` (método GET),
usando `async/await`. O código trata quatro situações: CEP com formato inválido, carregamento ("Consultando CEP..."),
CEP inexistente e falha de comunicação.

## Como testar
1. Abra `index.html` e navegue pelos links até `servicos.html` e `contato.html`.
2. Em **Serviços**: use "Consulte um serviço", o filtro do catálogo e o "Meu serviço favorito" (atualize a página para ver o dado permanecer).
3. Em **Serviços**, na seção "Consulta de endereço por CEP":
   - `123` → orienta a digitar 8 números (não consulta a API)
   - `01001-000` → retorna o endereço
   - `99999-999` → "CEP não encontrado."
   - sem Internet → "Não foi possível consultar o CEP agora."
4. Em **Contato**: envie o formulário vazio e depois preenchido.
5. Abra o Console (F12) e confirme que não há erros vermelhos.

## Publicação
Link do GitHub Pages: https://valotto-dev.github.io/portal_servico/

## Panorama Front-End
**1. Componentização:** é dividir a interface em partes menores e reutilizáveis (um card, um menu, um formulário). Assim eu escrevo uma vez, uso em vários lugares e, se precisar mudar, mudo em um só ponto.

**2. Multipágina x SPA:** na multipágina (como este Portal) cada link carrega um arquivo HTML novo. Na SPA existe uma única página e o JavaScript troca o conteúdo sem recarregar tudo.

**3. Bootstrap:** é uma biblioteca de CSS (e JS) com componentes e grade responsiva prontos. Ajuda quando preciso montar uma interface responsiva rápido, sem escrever todo o CSS do zero.

**4. React, Vue e Angular:** React é uma biblioteca para criar interfaces com componentes. Vue é um framework progressivo, fácil de adotar aos poucos. Angular é um framework completo, que já traz rotas, formulários e estrutura de projeto.

**5. Frameworks não substituem HTML, CSS e JS:** eles são construídos em cima dessas três tecnologias. Sem entendê-las, não consigo corrigir erros, personalizar o visual nem saber o que o framework está fazendo.

**6. IA no desenvolvimento:** a IA pode explicar erros, sugerir código e acelerar tarefas repetitivas. Mas eu preciso ler, testar e entender o que ela entrega, porque sou eu que respondo pelo código e posso ter que explicá-lo.

## Autor(a)
João Victor Sella Valotto
