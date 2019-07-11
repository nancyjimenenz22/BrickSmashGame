// function setup() {
//   createCanvas(2000, 1000);
// }
// function draw(){
//   rect(90, 20, 1409, 999); // rect(x, y, width, height)
// }
// function draw(){
// 	var height = 50;
// 	var width = 100;
// 	var i = 0;
// 	var gx = 0.1 * width;
// 	var j = 0;
// 	do {
// 		var y = (j + 1) * gx + (j * height);
// 		do {
// 			var x = (i + 1) * gx + (i * width);
// 			noStroke();
// 			fill(255,0,0);                      
// 			rect(x,y,width,height);//first row
// 			i = i+1;
// 		} while (i < 13);
// 		i = 0;
// 		j = j+1;
// 	}
// 	 while (j < 13);

// // }
// //code that creates the bricks ^
// var speedX = 3;
// var speedY = 2;
// var backgroundWidth = 800;
// var backgroundHeight = 600;
// var paddle;
// var ball;
// function setup(){
// 	createCanvas(backgroundWidth, backgroundHeight);
// 	paddle = createSprite(mouseX, 590, 50, 20);
// 	paddle.draw = function (){
// 		rect(1060,560,70,15);
// 	}
// 	ball = createSprite(100, 100, 20, 20);
// 	ball.draw = function (){
// 		ellipse(100,100,20,20);
// 		ball.velocity.x = 3;
// 		ball.velocity.y = 2;
// }
// }


// function draw(){
// 	background(100);
// 	//ellipse(ball.position.x,ball.position.y,20,20);
// 	ball.draw();
// 	ball.position.x = ball.position.x - speedX;
// 	ball.position.y = ball.position.y + speedY;
// 	//top wall
// 	if (ball.position.y == 10 || ball.position.y == backgroundHeight) {
// 		speedY = speedY * -1;
// 	}
// 	// //bottom wall
// 	// if (ball.position.y == backgroundHeight){
// 	// 	speedY = speedY * -1;
// 	// }
// 	//left wall
// 	if (ball.position.x == 10 || ball.position.x == backgroundWidth - 10) {
// 		speedX = speedX * -1;
// 	}
// 	// if (ball.position.x == backgroundWidth - 10) {
// 	// 	speedX = speedX * -1;
// 	// }
// 	paddle.draw();
	 
// }
	var ball; 
	var paddle;
	var speedY = 3;
	var speedX = 4;
	var score = 0;
	var brick1, brick2, brick3, brick4, brick5;
	var longbrick;
	function setup(){
		//create canvas
		createCanvas (890, 890);
		//create ball
		ball = createSprite (440, 80, 20, 20);
		ball.setCollider("circle", 0, 0, 10);
		ball.draw = function () {
			// draw the ball
				ellipse(0,0,20,20);
		}
		//create paddle
		paddle = createSprite (440, 850, 80,15);
		paddle.draw = function(){
			rect(0,0,80,15);
		}
		paddle.setCollider("rectangle", 0, 0, 80, 15);
		//make the ball move
		ball.setVelocity(speedX, speedY);
		paddle.immovable = true;
		//
		// rect(x, y, width, height)
		//making the bricks
		brick1 = createSprite(330,15,45,12);
		brick1.visible = true;
		brick1.draw = function(){
			if (brick1.visible == true){
			rect(0,0,45,12);
			brick1.immovable = true;
		}
			else{ 
			brick1.immovable = false;
		}
	}

	//brick number two
		brick2 = createSprite(405,15,45,12);
		brick2.visible = true;
		brick2.draw = function(){
			if (brick2.visible == true){
				rect (0,0,45,12);
				brick2.immovable = true;
			}
			else{
				brick2.immovable = false;
			}
		}
	//brick number three
		brick3 = createSprite(480,15,45,12);
		brick3.visible = true;
		brick3.draw = function(){
			if (brick3.visible == true){
				rect (0,0,45,12);
				brick3.immovbale = true;
			}
			else{
				brick3.immovable = false;
			}
		}
	//brick number four
		brick4 = createSprite(550,15,45,12);
		brick4.visible = true;
		brick4.draw = function(){
			if (brick4.visible == true){
				rect(0,0,45,12);
				brick4.immovable = true;
		}
			else{
			brick4.immovable = false;
			}
		}
		longbrick = createSprite(430, 40, 200,12);
		longbrick.visible= true;
		longbrick.draw = function (){ 
			if (longbrick.visible==true){
				rect(0,0,200,12);
				longbrick.immovable = true;
			}
			else{
				longbrick.immovable = false;
			}
		}
		//brick number 5
		brick5 = createSprite(625,15,45,12);
		brick5.visible = true;
		brick5.draw = function(){
			if (brick5.visible == true){
				rect (0,0,45,12);
				brick5.immovable = true;
			}
			else{
				brick5.immovable = false;
			}
		}

	longbrick.setCollider('rectangle',0,0,200,12)
	brick1.setCollider('rectangle',0,0,45,12);
	brick2.setCollider('rectangle',0,0,45,12);
	brick3.setCollider('rectangle',0,0,45,12);
	brick4.setCollider('rectangle',0,0,45,12);
	brick5.setCollider('rectangle',0,0,45,12);
	} 
	function draw(){
		if (mouseIsPressed){
			ball.debug = true;
			paddle.debug = true;
			brick1.debug = true;
			brick2.debug = true;
			brick3.debug = true;
			brick4.debug = true;
			longbrick.debug = true;
			brick5.debug = true;
		}
		paddle.draw();
		brick1.draw();
		brick2.draw();
		brick3.draw();
		brick4.draw();
		brick5.draw();
		longbrick.draw();
		paddle.position.x = mouseX;
		background(75);
		drawSprites();
		ball.bounce (paddle);
		ball.bounce (brick1, changeState1);
		function changeState1(){
			brick1.visible = false;
			brick1.setCollider('rectangle',0,0,0,0);
			ball.velocity.y = 3;
			ball.velocity.x = 4;
			score = score + 1;
		}
		ball.bounce (brick2, changeState2);
		function changeState2(){
			if (brick2.visible==true){
				score = score + 1;
			}
			brick2.visible = false;
			brick2.setCollider('rectangle',0,0,0,0);
			ball.velocity.y = 3;
			ball.velocity.x = 4;
		}
		ball.bounce (brick3, changeState3);
		function changeState3(){
			if (brick3.visible==true){
				score = score + 1;
			}
			brick3.visible = false;
			brick3.setCollider('rectangle',0,0,0,0);
			ball.velocity.y = 3;
			ball.velocity.x = 4;
		}
		ball.bounce (brick4, changeState4);
		function changeState4(){
			brick4.visible = false;
			brick4.setCollider('rectangle',0,0,0,0);
			ball.velocity.y = 3;
			ball.velocity.x = 4;
			score = score + 1;
		}
		ball.bounce(longbrick, changeStateLong);
		function changeStateLong(){
			longbrick.visible=false;
			longbrick.setCollider('rectangle', 0,0,0,0);
			ball.velocity.y = 3;
			score = score+1;
		}
		ball.bounce(brick5,changeState5);
		function changeState5(){
			brick5.visible = false;
			brick5. setCollider('rectangle',0,0,0,0);
			ball.velocity.y = 3;
			score = score +1;
		}




		// get the speed vectors of the ball
		// var x = ball.velocity.x;
		// var y = ball.velocity.y;
		// check if ball is hitting wall
		//top wall
		if (ball.position.y < 10) {
			//update speed vector
			ball.velocity.y = ball.velocity.y * -1;
		}
		//bottom wall
		if (ball.position.y > 890){
			textSize(80);
			text('GAME OVER',155,890/2);
		}
		else 
		//left wall
		if (ball.position.x < 10 || ball.position.x > 890 - 10) {
			ball.velocity.x = ball.velocity.x * -1;
		}
		textSize(20);
		text ('SCORE: '+str(score),760,20);
		//win
		if (score == 7){
			textSize(80);
			text('GAME COMPLETED',155,890/2);
		}
	}	
				// //right wall
				// if (ball.position.x > 890 - 10) {
				// 	ball.velocity.x = ball.velocity.x * -1;
				// }
				// update the velocity of the ball using the speed vectors,
				// ball.setVelocity(x,y);
				// create 1st brick
 	 // creating the sprite for brick 1
 	 //making sure you can see it

 	 //drawing it
     //if the brick has not been hit by the ball then 
     //draw the brick as a rectangle
     // when the ball hits it bounces off the edge and does not go through the space untill the brick is completely gone
  	 //the brick has been hit 
     //allowing the ball to pass through the old space of the brick

	//setting the bricks colliders
	
	// brick.setCollider('rectangle',0,0,90,12);




