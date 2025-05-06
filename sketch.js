let xJogador = [20, 20,20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ["🥷","👼","🕵","🧙"];
let contagem = jogador. length;
let teclas = ["q", "w", "e", "r"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
 defineTela();
 mostraJogadores();
 desenhaChegada();
 defineVencedor();
  
function defineTela(){
  if(focused == true) {
  background('#E91E63');
  } else  {
  background('#2196F3');
  }
}  
  function mostraJogadores(){
  textSize(30);
    for (let i = 0; i < contagem; i++){
  text(jogador[i], xJogador[i], yJogador[i]);
  } 
  }
  function desenhaChegada (){
  fill('#E91E63') ;
  rect(350, 0, 10, 400);
  fill('#4CAF50');
  for(let yAtual = 0; yAtual < 400; yAtual += 20)(
  rect(350,yAtual, 10,10)
    )
  }
  
  function defineVencedor (){
  textAlign(CENTER, CENTER);
    for (let i = 0; i < contagem; i++){
  if (xJogador[i] > 350){
    text(jogador [i]+ "𝔭𝔞𝔯𝔞𝔟é𝔫𝔰, 𝔳𝔬𝔠ê 𝔠𝔬𝔫𝔰𝔢𝔤𝔲𝔦𝔲!", width/ 2,   
        height / 2);
    noLoop();
      }
    }
  }  
}

function keyReleased( ){
  for (let i = 0; i < contagem; i++) {
    if(key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}

