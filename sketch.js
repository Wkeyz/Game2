var whale,whaleImg,kid1,kid2,kid3,alien1,alien2,alien3;
var kid=[];
var kidlength=2;
var bg;
var background1;
var aliens=[];
var kidsGroup;

function preload(){
bg=loadImage("beeach.png");
whaleImg=loadImage("whale.png")
alien1=loadImage("alien.png");
alien2=loadImage("alien2.png");
alien3=loadImage("alien3.png");
kid1=loadImage("kid.png");
kid2=loadImage("kid1.png");
kid3=loadImage("kid2.png");
}




function setup() {
  createCanvas(displayWidth,displayHeight);
  //background1 = createSprite(displayWidth/2,displayHeight/2,1000,2000);
//background1.addImage(bg);
//background1.scale=1.75; 
whale = createSprite(width/2,height-100);
whale.addImage(whaleImg);
whale.scale=0.325;
  

  
  kidsGroup=new Group();
}

function draw() {
  
background(bg);
console.log(whale.x);

createKids();
moveWhale();

if(frameCount%1200==0){
  kidsGroup.destroyEach();
}

  drawSprites();
}


function createKids(){
  if(frameCount%500===0){
    var r=Math.round(random(1,3));
    for(var i=0;i<=kidlength;i++){
      kids=createSprite(10,10,20,20);
      kids.x=Math.round(random(10,width-100));
      kids.y=Math.round(random(100,height-100));
      kidsGroup.add(kids);
      
      switch(r){
        case 1:{
          kids.addImage(kid1);
          kids.scale=0.25;
          break
        }
        case 2:{
          kids.addImage(kid2);
          kids.scale=0.25;
          break
        }
        case 3:{
          kids.addImage(kid3);
          kids.scale=0.25;
          break
         }
         
        

      }
      
    }
  }
  
}

function moveWhale(){
  if(keyDown(UP_ARROW)){
    whale.y=whale.y-0.075;
  }
  if(keyDown(DOWN_ARROW)){
    whale.y=whale.y+0.075;
  }
  if(keyDown(LEFT_ARROW)){
    whale.x=whale.x-0.075;
  }
  if(keyDown(RIGHT_ARROW)){
    whale.x=whale.x+0.075;
  }
}