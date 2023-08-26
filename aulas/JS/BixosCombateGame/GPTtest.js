const personagens = [
  "../Imagem/Piruca.png",
  "../Imagem/bixo.png",
   "../Imagem/dog.png",
  "../Imagem/douguinha.png",
  "../Imagem/deva.png",
  "../Imagem/brandow.png",
  "../Imagem/jean.png",
  "../Imagem/jao.png" 
];
const campoDeBatalha = [
 {nome:"Mulher", image:""},
 {nome:"Racha", image:""},
 {nome:"Dinheiro", image:""},
 {nome:"Shape", image:""},
 {nome:"Beleza", image:""}
];
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}
function fillAllImagesRandomly() {
  const imageElements = document.querySelectorAll(".personagemSelecionavel");
  for (let i = 0; i < imageElements.length; i++) {
      const randomIndex = getRandomIndex(personagens.length);
      imageElements[i].src = personagens[randomIndex];
  }
}
fillAllImagesRandomly();