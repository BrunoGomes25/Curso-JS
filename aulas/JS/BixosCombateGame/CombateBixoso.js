const personagens = [
    { nome: "Piruca", imagem: "" },
    { nome: "Bixo", imagem: "" },
    { nome: "Dog", imagem: "" },
    { nome: "Douguinha", imagem: "" },
    { nome: "Carlao", imagem: "" },
    { nome: "Brandow", imagem: "" },
    { nome: "Yuri", imagem: "" },
    { nome: "Jean", imagem: "" },
    { nome: "Jao", imagem: "" }
];
const campoDeBatalha = [
   {nome:"Mulher", image:""},
   {nome:"Racha", image:""},
   {nome:"Dinheiro", image:""},
   {nome:"Shape", image:""},
   {nome:"Beleza", image:""}
];

function getPersonagemAleatorio() {
    const bixoAleatorio = Math.floor(Math.random() * personagens.length);
    return personagens[bixoAleatorio];
}

function getCampoAleatorio() {
    const campoAleatorio = Math.floor(Math.random() * campoDeBatalha.length);
    return campoDeBatalha[campoAleatorio];
}
const nomePersonagem = document.querySelector(".nome");
const imagemPersonagem = document.querySelector(".personagemSelecionavel");
const imagemCampo = document.querySelector(".Battlefield-img");
const nomeCampo = document.querySelector(".Battlefield");

const persoAleatorio = getPersonagemAleatorio();
const campAleatorio = getCampoAleatorio();