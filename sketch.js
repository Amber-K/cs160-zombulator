//Zombulator by Amber Kolar

var zombieX = 200;
var zombie2X = 50;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(255, 0, 0);
	ellipse(zombieX, 50, 80, 80);
	fill(150, 150, 200);
	ellipse(zombie2X, 200, 80, 80);
	fill(100, 0, 200);
	ellipse(500, 500, 90, 90);
	fill(200, 100, 200);
	ellipse(100, 300, 20, 20);
	fill(0, 100, 200);
	ellipse(400, 150, 150, 150);

	zombieX = zombieX + 1;
	zombie2X = zombie2X + 3;
}