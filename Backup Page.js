function setup() {
  createCanvas(2000, 1000);
}
function draw(){
  rect(90, 20, 1409, 999); // rect(x, y, width, height)
}
function draw(){
	var height = 50;
	var width = 100;
	var i = 0;
	var gx = 0.1 * width;
	var j = 0;
	do {
		var x = (i + 1) * gx + (i * width)
		noStroke();
		fill(255,0,0);                      
		rect(x,gx,width,height);//first row
		i = i+1;
	} while (i < 13);
	x = gx;
	do {
		var y = (j + 1) * gx + (j * height)
		noStroke();
		fill(255,0,0);
		rect(x,y,width, height);//second row
		j = j+1;
	} while (j < 13);
}
// loop in a loop
function setup() {
  createCanvas(2000, 1000);
}
function draw(){
  rect(90, 20, 1409, 999); // rect(x, y, width, height)
}
function draw(){
	var height = 50;
	var width = 100;
	var i = 0;
	var gx = 0.1 * width;
	var j = 0;
	do {
		var y = (j + 1) * gx + (j * height);
		do {
			var x = (i + 1) * gx + (i * width);
			noStroke();
			fill(255,0,0);                      
			rect(x,y,width,height);//first row
			i = i+1;
		} while (i < 13);
		i = 0;
		j = j+1;
	}
	 while (j < 13);

	 