//Zombulator by Amber Kolar

/*var zombieX = 200;
var zombie2X = 50;
var speed = 3;
var size1 = 80;
var size2 = 80;*/

var blood1 = 255;
var blood2 = 255;

var zombieY = 100;
var zombieV = 0;
var zombieA;
var zombieDamping;
var zombieLoss;
var zombieSize;
var zombieColor;

var humanY = 650;
var humanV = 0;
var humanA;
var humanDamping;
var humanLoss;
var humanSize;
var humanColor;

function setup() {
	createCanvas(windowWidth, windowHeight);
	zombieColor = color(random(255), random(255), random(255));
	humanColor = color(random(255), random(255), random(255));
	//testZombieColor = color(255, 176, 75);

	zombieDamping = random(-0.8, -0.95);
	humanDamping = random(-0.8, -0.95);

	zombieSize = random(70, 110);
	humanSize = random(70, 110);

	zombieA = random(0.05, 0.2);
	humanA = random(0.05, 0.2);

	zombieLoss = random(0.7, 0.95);
	humanLoss = random(0.7, 0.95);
}

function draw() {
	background(blood1, blood2, blood2);
	noStroke();
	fill(zombieColor);
	ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
	fill(humanColor);
	ellipse(windowWidth / 2, humanY, humanSize, humanSize);
	/*fill(testZombieColor);
	ellipse(zombieX, 50, size1, size2);
	fill(100, 200, 300);
	stroke(200, 0, 100);
	ellipse(zombie2X, 200, 80, 80);*/

	zombieY += zombieV;
	zombieV += zombieA;
	humanY -= humanV;
	humanV += humanA;
	
	if(zombieY + (zombieSize / 2) >= windowHeight) {
		zombieV *= zombieDamping;
		zombieSize *= zombieLoss;
		zombieColor = color(random(255), random(255), random(255));
	}

	if(humanY - (humanSize / 2) <= 0) {
		humanV *= humanDamping;
		humanSize *= humanLoss;
		humanColor = color(random(255), random(255), random(255));
	}

	if(zombieY + (zombieSize / 2) > humanY - (humanSize / 2) && humanSize > 1 && zombieSize > 1) {
		zombieV *= zombieDamping;
		zombieSize *= zombieLoss;
		zombieColor = color(random(255), random(255), random(255));
		
		humanV *= humanDamping;
		humanSize *= humanLoss;
		humanColor = color(random(255), random(255), random(255));

		blood1 -= 6;
		blood2 -= 22;
	}

	if(zombieSize <= 1) {
		zombieColor = color(blood1, blood2, blood2);
	}

	if(humanSize <= 1) {
		humanColor = color(blood1, blood2, blood2);
	}

	/*if (zombieX >= 800) {
		testZombieColor = color(random(255), random(255), random(255));
		speed = speed + 1;
		size1 = size1 - 1;
		size2 = size2 - 1;
		speed = speed * -1;
	}
	
	if (zombieX <= 0) {
		speed = speed * -1;
		testZombieColor = color(random(255), random(255), random(255));
	}

	if (size1 == 0) {
		zombieX = 1;
		speed = 0;
	}

	zombieX = zombieX + speed;
	zombie2X = zombie2X + 1;*/
}