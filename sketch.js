//Zombulator by Amber Kolar

var zombieX = 200;
var zombie2X = 50;
var zombieY = 100;
var zombieV = 1;
var zombieA = 0.2;
var zombieDamping = -0.8;
var zombieSize = 80;
//var redColor = 255;
var zombieColor;
var backgroundColor;

var humanY = 100;
var humanSize = 80;

var speed = 3;
var size1 = 80;
var size2 = 80;

function setup() {
	createCanvas(windowWidth, windowHeight);
	zombieColor = color(255, 176, 75);
	backgroundColor = color(242, 255, 0);
}

function draw() {
	noStroke();
	background(255, 255, 255);
	fill(zombieColor);
	ellipse(zombieX, 50, size1, size2);
	fill(150, 150, 200);
	stroke(200, 0, 100);
	ellipse(zombie2X, 200, 80, 80);
	fill(100, 0, 200);
	ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
	fill(0, 100, 200);
	ellipse(windowWidth / 2, humanY, humanSize, humanSize);

	zombieY += zombieV;
	zombieV += zombieA;

	if(zombieY + (zombieSize / 2) >= windowHeight) {
		zombieY = windowHeight;
		zombieV *= zombieDamping;
		zombieSize *= 0.7;
	}

	if (zombieX >= 800) {
		//zombieX = 0;
		//redColor = random(255);
		zombieColor = color(random(255), random(255), random(255));
		speed = speed + 1;
		size1 = size1 - 1;
		size2 = size2 - 1;
		speed = speed * -1;
	}
	
	if (zombieX <= 0) {
		speed = speed * -1;
		zombieColor = color(random(255), random(255), random(255));
	}

	//This keeps the circle from coming back after going away.
	if (size1 == 0) {
		zombieX = 1;
		speed = 0;
	}

	zombieX = zombieX + speed;
	zombie2X = zombie2X + 1;
}