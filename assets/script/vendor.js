//Barras
const monstroVidaBarra = document.getElementById('monstro-barra');
const jogadorVidaBarra = document.getElementById('jogador-barra');
const manaBarra = document.getElementById('mana-jogador')

//Btn
const ataqueBtn = document.getElementById('ataque');
const ataqueFortalecidoBtn = document.getElementById('ataque-fortalecido');
const curaBtn = document.getElementById('cura');
const magiabtn = document.getElementById('magia')

function configurandoBarras(quantidade) {
  monstroVidaBarra.max = quantidade;
  monstroVidaBarra.value = quantidade;
  jogadorVidaBarra.max = quantidade;
  jogadorVidaBarra.value = quantidade;
  manaBarra.max = quantidade;
  manaBarra.value = quantidade;
  
  
}

function ataqueJogador(valorAtaque) {
  const ataqueDano = Math.random() * valorAtaque;
  console.log(ataqueDano);
  monstroVidaBarra.value = +monstroVidaBarra.value - ataqueDano;
  vidaAtualMonstro -= ataqueDano;
  return +ataqueDano;
}

function ataqueMonstro(valorAtaque) {
  const ataqueDano = Math.random() * valorAtaque;
  jogadorVidaBarra.value = +jogadorVidaBarra.value - ataqueDano;
  vidaAtualJogador -= ataqueDano;
  return +ataqueDano;
}

function curaVida(quantidade) {
  jogadorVidaBarra.value = +jogadorVidaBarra.value + quantidade;
  vidaAtualJogador += quantidade;
}

function magia8(progresso) {
  manaBarra.value = manaBarra.value - progresso
 
} 

  

  









