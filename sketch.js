var zombie 
var zombieImage 





function preload(){
zombieImage = loadImage("zombie.png")
}

function setup() {
createCanvas(600,200)
zombie=createSprite(100,100,20,40) 
zombie.addImage(zombieImage)  
zombie.scale=0.4
}

function draw() {
background("green")
drawSprites()  

}








