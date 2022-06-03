//Objetivos:
//1 - Garantir que a tela(API do DOM) tenha sido carregada por inteiro - OK
//2 - Função que crie parágrafos - OK
//3 - Capturar todos os botões da tela
//4 - Fazer iteração para que todos os botões quando clicados criem um parágrafo


document.addEventListener('DOMContentLoaded', () => {
    function createParagraph() {
        const para = document.createElement('p'); //Cria a const e atribui a ela o elemento 'p' criado
        para.textContent = 'You clicked me!'; //Coloca um texto dentro da const que é um parágrafo
        document.body.appendChild(para); //Gruda o p da const no body(elemento pai)
    }
});