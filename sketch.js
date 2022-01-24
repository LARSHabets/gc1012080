function startScreen(){
		background(100, 210, 100)
		fill(255)
		textAlign(CENTER);
		text('Welkom bij mijn vangspel', width / 2, height / 2)
		text('klik om te beginnen', width / 2, height / 2 + 20);
		reset();
}

function gameOn(){
	background(137, 207, 240)
  fill(250,250,250)
  text("score = " + score, 30,20)
  text("highscore = " + highscore, 42, 35)
  fill(160, 82, 42)
  rect( 70, 390, 60, 300 )
  fill(60, 255, 51)
  ellipse(70, 200,200)
  fill(255,0,0);
  ellipse(x,y,20,20)
  fill(101, 47, 47)
  rectMode(CENTER)
  rect(mouseX,height-10,40,30)

	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.2,5
    score+= 1
    
   
    
  }
  
    if(score > highscore ) {
    highscore = score
    }
    
  if(y==-20){
  	pickRandom();
  }
    
	
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
		background(137, 207, 240)
        fill(250,250,250)
		textAlign(CENTER);
		text('GAME OVER', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 20)
    text("HIGHSCORE = " + highscore, width / 2, height / 2 + 40)
		text('click to play again', width / 2, height / 2 + 55);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
