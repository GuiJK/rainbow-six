/* 
  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const operadores = document.querySelectorAll('.operador');


// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
operadores.forEach((operador) => {
  operador.addEventListener('mouseenter', () => {

    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
    removerSelecaoDoOperador();

    operador.classList.add('selecionado');

    // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

    //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
    alterarImagemOperadorSelecionado(operador);

    // passo 3 - alterar o nome do personagem grande
    alterarNomeOperadorSelecionado(operador);

    // passo 4 - alterar a descrição do personagem grande
    alterarDescricaoOperador(operador);
  })
})

function alterarDescricaoOperador(operador) {
  const descricaoOperador = document.getElementById('descricao-operador');
  descricaoOperador.innerText = operador.getAttribute('data-description');
}

function alterarNomeOperadorSelecionado(operador) {
  const nomeOperador = document.getElementById('nome-operador');
  nomeOperador.innerText = operador.getAttribute('data-name');
}

function alterarImagemOperadorSelecionado(operador) {
  const imagemOperadorGrande = document.querySelector('.operador-grande');
  // passo 2 - alterar a imagem do personagem grande
  const idOperador = operador.attributes.id.value;
  imagemOperadorGrande.src = `./src/imagens/${idOperador}.png`;
}

function removerSelecaoDoOperador() {
  const operadorSelecionado = document.querySelector('.selecionado');
  operadorSelecionado.classList.remove('selecionado');
}