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

// }
//code that creates the bricks ^
var speedX = 3;
var speedY = 2;
var backgroundWidth = 800;
var backgroundHeight = 600;
var paddle;
var ball;
function setup(){
	createCanvas(backgroundWidth, backgroundHeight);
	paddle = createSprite(mouseX, 590, 50, 20);
	paddle.draw = function (){
		rect(mouseX,560,70,15);
	}
	ball = createSprite(100, 100, 20, 20);
	ball.draw = function (){
		ellipse(100,100,20,20);
	}
	ball.velocity.x = 3;
	ball.velocity.y = 2;
}

function draw(){
	background(100);
	//ellipse(ball.position.x,ball.position.y,20,20);
	ball.draw();
	ball.position.x = ball.position.x - speedX;
	ball.position.y = ball.position.y + speedY;
	//top wall
	if (ball.position.y == 10 || ball.position.y == backgroundHeight) {
		speedY = speedY * -1;
	}
	// //bottom wall
	// if (ball.position.y == backgroundHeight){
	// 	speedY = speedY * -1;
	// }
	//left wall
	if (ball.position.x == 10 || ball.position.x == backgroundWidth - 10) {
		speedX = speedX * -1;
	}
	// if (ball.position.x == backgroundWidth - 10) {
	// 	speedX = speedX * -1;
	// }
	paddle.draw();
	 
}
	



