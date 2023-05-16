//Objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua. 

//Pegar no JS o elemento HTML correspondente ao botão de troca de tema
  
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

 //Dar um jeito de pegar no JS o elemento HTML corresponde ao body

const body = document.querySelector("body");

const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao")

//Dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {

//Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

//Verificar se o body já tem a classe modo-escuro

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

if(modoEscuroEstaAtivo) {

//Remover a classe do modo-escuro do body

body.classList.remove("modo-escuro");

//Trocar a imagem do botão de alterar tema pra sol

imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/sun.png")

} else {


//Adicionar a classe modo-escuro no body

body.classList.add("modo-escuro");

//Trocar a imagem do botão de alterar tema pra lua

imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/moon.png")
}
});


    


