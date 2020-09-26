var escena_actual = 0;
let arrayquadratsverm = [];
let arrayquadratsgr = [];
let arrayquadratsbl = [];
let clicat = 0;
let temps = 0;

//random
let randomColor;
     


let text_gran = "BAUHAUS";
let text_petit = "AUSSTELLUNG";
let text_petit2 = "JULI, AUGUST, SEPTEMBER";
let text_gran2 = "1923";

//carregar fonts de text
function preload(){
  bauhaus = loadFont('Long_Shot.ttf');
}

//s'inicialitza
function setup() {
  createCanvas(400, 700);
  background(236, 221, 190);

  //---- Crear Quadrats ---- //
    
  ////////// Crear quadrat 1:

  for (let i = 0; i < 1; i++) {
    
    ver = new quadrat(75,50,60,60);
    arrayquadratsverm.push(ver);
    
  }

    // Crear quadrat 2:
  for (let i = 0; i <1; i++) {
    gr = new quadrat(200,50,60,60);
    arrayquadratsgr.push(gr);
    
  } 
    //crea quadrat 3
  for (let i = 0; i < 1; i++) {
    bl = new quadrat(325,50,60,60);
    arrayquadratsbl.push(bl);
    
  }
  //4
  for (let i = 0; i < 1; i++) {
    gr = new quadrat(75,175,60,60);
    arrayquadratsgr.push(gr);
    
    
  }
  //5
  for (let i = 0; i < 1; i++) {
    bl = new quadrat(200,175,60,60);
    arrayquadratsbl.push(bl);
    
    
  }
  //6
  for (let i = 0; i < 1; i++) {
    ver = new quadrat(325,175,60,60);
    arrayquadratsverm.push(ver);
    
  }
  //7
  for (let i = 0; i < 1; i++) {
    bl = new quadrat(75,300,60,60);
    arrayquadratsbl.push(bl);
    
  }
  //8
  for (let i = 0; i < 1; i++) {
    ver = new quadrat(200,300,60,60);
    arrayquadratsverm.push(ver);

    
  }
  //9
  for (let i = 0; i < 1; i++) {
    gr = new quadrat(325,300,60,60);
    arrayquadratsgr.push(gr);
    
  }
  //10
  for (let i = 0; i < 1; i++) {
    ver = new quadrat(75,425,60,60);
    arrayquadratsverm.push(ver);
    
  }
  //11
  for (let i = 0; i < 1; i++) {
    gr = new quadrat(200,425,60,60);
    arrayquadratsgr.push(gr);
  
    
  }
  //12
  for (let i = 0; i < 1; i++) {
    bl = new quadrat(325,425,60,60);
    arrayquadratsbl.push(bl);
    
    
  }
}

//es cliqui el mouse i ho faigui sol
function mouseClicked(){

  if (escena_actual == 0) {

    if(clicat==0){
      
      temps=0;
      console.log("clicat");
      escena_actual = 1;
      clicat=clicat+1;
    }
  } 
}

// Quan el movil es mou:
function deviceShaken() {

    if(clicat==0){
      temps=0;
     
      escena_actual = 1;
      clicat=clicat+1;
      //Restart animació:
    }
  if(clicat==1 ){
    background('#000000');
    clicat=0;
    escena_actual = 0; 
    setup();
    temps=0;
   // transparencia=0;
    /*bola=1;
    lastran=5;
    posiciox=0;
    posicioy=0;
    posicioBx=200;
    posicioBy=0;
    transparenciaLletres=0;*/
    clicat=0;
  }
}

function draw() {
  if(clicat == 1 && mouseIsPressed){
    escena_actual = 0;
    //setup();
    clicat=0;
    noStroke();
    temps = 0;
  }
  if (escena_actual == 1) { //canvi d'escena
    if (temps < 240) { // Li diem que quan arribi al temps aquest es pari
      for (let i = 0; i < arrayquadratsverm.length; i++) {
        temps = temps+0.5;
        fill(0);
        noStroke();
        arrayquadratsverm[i].display(); //Cridem a la funcio display que crea el quadrat
        arrayquadratsverm[i].velocitat(); // Cridem a la funcio velocitat que va posant quadrats a les coordenades que li indiquem
        
        randomColor = color(random(255),random(255),random(255)); //cambia el color a random
        fill(randomColor);

        //fill(193, 50, 44) //Si desactivem la linia de sobre i activem aquesta amb podem veure el poster generat amb els colors que hi ha al poster original

        noStroke();
        rect(75,50,60,60);
        rect(325,175,60,60);
        rect(200,300,60,60);
        rect(75,425,60,60);
        console.log(i);
      }
      for (let i = 0; i < arrayquadratsbl.length; i++) {
        fill(0);
        noStroke();
        arrayquadratsbl[i].display();
        arrayquadratsbl[i].velocitat();
        randomColor = color(random(255),random(255),random(255));
        fill(randomColor);

        //fill(2, 104, 189); //Si desactivem la linia de sobre i activem aquesta amb podem veure el poster generat amb els colors que hi ha al poster original
        noStroke();
        rect(325,50,60,60);
        rect(200,175,60,60);
        rect(75,300,60,60);
        rect(325,425,60,60);
      }
      for (let i = 0; i < arrayquadratsgr.length; i++) {
        fill(0);
        noStroke();
        arrayquadratsgr[i].display();
        arrayquadratsgr[i].velocitat();
        randomColor = color(random(255),random(255),random(255));
        fill(randomColor);
        
        //fill(241, 187, 0); //Si desactivem la linia de sobre i activem aquesta amb podem veure el poster generat amb els colors que hi ha al poster original
        noStroke();
        rect(200,50,60,60);
        rect(75,175,60,60);
        rect(325,300,60,60);
        rect(200,425,60,60);
        
        
      }
    
          
    }
    //setup();
    textSize(70);
    fill(15, 12, 7);
    textFont(bauhaus);
    text(text_gran,20,610);
    text(text_gran2, 290, 645);
    textSize(30);
    text(text_petit, 255, 580);
    text(text_petit2, 20, 645);
  }
  
  else{
    fill(255);
  }

}

//-------Aqui es crea la classe quadrat-------

class quadrat{
  
  constructor(x,y,a,b){
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    
  }
  
  display(){
    rect(this.x, this.y, this.a, this.b);
  }

  velocitat(){
    this.y = this.y + 0.5;
    this.x = this.x - 0.5;
  }

}
