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
 
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


  function preenchimentoAleatorio() {
    const personagemEmbaralhado = [...personagens]
    shuffleArray(personagemEmbaralhado)
    const imagens = document.querySelectorAll(".personagemSelecionavel");
    for (let i = 0; i < imagens.length; i++) {
        
        imagens[i].src = personagemEmbaralhado[i];
    }
  }
  preenchimentoAleatorio();

  Battlefield-img