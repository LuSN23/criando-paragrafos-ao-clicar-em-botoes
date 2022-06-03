//Objetivos:
//1 - Garantir que a tela(API do DOM) tenha sido carregada por inteiro - OK
//2 - Função que crie parágrafos - OK
//3 - Capturar todos os botões da tela - OK
//4 - Fazer iteração para que todos os botões quando clicados criem um parágrafo - OK


document.addEventListener('DOMContentLoaded', () => {
    function createParagraph() {
        const para = document.createElement('p'); //Cria a const e atribui a ela o elemento 'p' criado
        para.textContent = 'You clicked me!'; //Coloca um texto dentro da const que é um parágrafo
        document.body.appendChild(para); //Gruda o p da const no body(elemento pai)
    }
    const buttons = document.querySelectorAll('button'); //Retorna nodeLists do tipo static(que são array-like objects, portanto iteráveis)

    for(button of buttons) {
        button.addEventListener('click', createParagraph); //Cada 'button' chama a função 'createParagraph()' ao ser clicado
    }
});