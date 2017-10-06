//Zombulator by Amber Kolar

var zombieX = 200;
var zombie2X = 50;
var redColor = 255;
var speed = 3;
var size1 = 80;
var size2 = 80;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(redColor, 0, 0);
	ellipse(zombieX, 50, size1, size2);
	fill(150, 150, 200);
	ellipse(zombie2X, 200, 80, 80);
	fill(100, 0, 200);
	ellipse(500, 500, 90, 90);
	fill(200, 100, 200);
	ellipse(100, 300, 20, 20);
	fill(0, 100, 200);
	ellipse(400, 150, 150, 150);

	if (zombieX >= 800) {
		//zombieX = 0;
		redColor = redColor - 20;
		speed = speed + 1;
		size1 = size1 - 1;
		size2 = size2 - 1;
		speed = speed * -1;
	}
	
	if (zombieX <= 0) {
		speed = speed * -1;
	}

	//This keeps the circle from coming back after going away.
	if (size1 == 0) {
		zombieX = 1;
		speed = 0;
	}

	zombieX = zombieX + speed;
	zombie2X = zombie2X + 1;
}