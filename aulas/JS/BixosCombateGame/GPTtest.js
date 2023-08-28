const personagens = [
  { id: 1 , imagem: "../Imagem/Piruca.png"},
  { id: 2 , imagem: "../Imagem/bixo.png"},
  { id: 3 , imagem: "../Imagem/dog.png"},
  { id: 4 , imagem: "../Imagem/douguinha.png"},
  { id: 5 , imagem: "../Imagem/deva.png"},
  { id: 6 , imagem: "../Imagem/brandow.png"},
  { id: 7 , imagem: "../Imagem/jean.png"},
  { id: 8 , imagem: "../Imagem/jao.png"} 
];

function getIndiceAleatorio(max) {
  return Math.floor(Math.random() * max);
}

function preencherTodasAsImagensAleatoriamente() {
  const elementosDeImagem = document.querySelectorAll(".personagemSelecionavel");

  const personagensDisponiveis = [...personagens];

  for (let i = 0; i < elementosDeImagem.length; i++) {
    if (personagensDisponiveis.length === 0) {
      personagensDisponiveis.push(...personagens);
    }

    const indiceAleatorio = getIndiceAleatorio(personagensDisponiveis.length);
    const personagemSelecionado = personagensDisponiveis.splice(indiceAleatorio, 1)[0];

    elementosDeImagem[i].src = personagemSelecionado.imagem;
  }
}

preencherTodasAsImagensAleatoriamente();