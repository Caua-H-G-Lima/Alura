//Bolinha medidas
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade bolinha
let velxBolinha = 6;
let velyBolinha = 6;

//raquete medidas
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 75;

//raquete oponente medidas
let yRaqueteOponente = 150;
let xRaqueteOponente = 585;
let velRaquete;

//placar
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  animacaoBolinha();
  mostraBolinha();
  verificaColisao();
  raquete(xRaquete, yRaquete);
  raquete(xRaqueteOponente, yRaqueteOponente);
  raqueteMotion();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  movimentoOponente();
  placar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function animacaoBolinha() {
  xBolinha += velxBolinha
  yBolinha+= velyBolinha
}

function verificaColisao() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velxBolinha  *=-1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio <0) {
    velyBolinha *=-1;
  }
  
}

function raquete(x,y) {
  rect (x, y, wRaquete, hRaquete);
}

function raqueteMotion() {
  if (keyIsDown(87)) {
    yRaquete -= 8;
  }
  if (keyIsDown(83)) {
    yRaquete += 8;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + wRaquete 
      && yBolinha - raio < yRaquete + hRaquete 
      && yBolinha + raio > yRaquete) {
    velxBolinha *= -1
  }
}

function movimentoOponente(){
    if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 8;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 8;
  }
}

function verificaColisaoRaqueteOponente() {
  if (xBolinha + raio > xRaqueteOponente
      && yBolinha - raio < yRaqueteOponente + hRaquete 
      && yBolinha + raio > yRaqueteOponente) {
    velxBolinha *= -1
  }
}

function placar() {
  textSize(16);
  fill (color(255, 140, 0))
  stroke(255)
  rect (261, 10, 35, 26)
  rect (304, 10, 35, 26)
  textAlign(CENTER)
  fill(255)
  text(meusPontos, 278, 26)
  text(pontosOponente, 321, 26)
}

function marcaPonto() {
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}

