// Zombulator by Amber Kolar

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const POPULATION_SIZE = 500;

var population = [];

var zombieCount = 0;
var humanCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializePopulation();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawPopulation();
  movePopulation();
  drawPopulationCounts();
  handleCollisions();
}

function handleCollisions() {
  for(var i = 0; i < POPULATION_SIZE; ++i) {
    var attacker = population[i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j) {
      var target = population[j];
      if (attacker.isTouching(target) && attacker.size >= target.size && target.size > 0) {
        if (target.humanoidType == "zombie") {
          --zombieCount;
          target.size = 0;
          target.armed = 0;
        } else {
          --humanCount;
          ++zombieCount;
          target.humanoidType = "zombie";
          target.color = color(random(100, 255), random(50, 150), random(50, 150), 150);
          target.move = function() {
            var direction = random(0, 100);
            if (direction < 20) {
              this.x += this.speed;
            } else if (direction < 40) {
              this.x -= this.speed;
            } else if (direction < 60) {
              this.y -= this.speed;
            } else {
              this.y += this.speed;
            }
          }
        }
      }
    }
  }
}

function initializePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var humanoid_type = random(0, 100);
    if (humanoid_type <= 50) {
      population[i] = initializeZombie();
      ++zombieCount;
    } else {
      population[i] = initializeHuman();
      ++humanCount;
    }
  }
}

function drawPopulationCounts() {
  fill(109, 255, 139, 150)
  stroke(0);
  textSize(72);
  textAlign(CENTER);
  text("Zombies: " + zombieCount, width / 2, 100);
  text("Humans: " + humanCount, width / 2, height - 100);
}

function drawPopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].draw();
  }
}

function movePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].move();
  }
}

function initializeZombie() {
  return {
    humanoidType: "zombie",
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150),
    move: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed;
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y -= this.speed;
      } else {
        this.y += this.speed;
      }
    },
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    },
    isTouching: function(target) {
      if (this.humanoidType == target.humanoidType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2);
    }
  };
}

function initializeHuman() {
  return {
    humanoidType: "human",
    armed: random(0, 618),
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 150), random(50, 150), random(150, 255), 150),
    move: function() {
        var direction = random(0, 1000);
        if (direction < 200) {
          this.x += this.speed;
        } else if (direction < 400) {
          this.x -= this.speed;
        } else if (direction < 600) {
          this.y += this.speed;
        } else {
          this.y -= this.speed;
          if (this.armed > direction) {
            fill(0, 0, 0);
            bulletX = this.x;
            bulletY = this.y - this.size/2;
            bulletSize = 1.5;
            while(bulletY >= 0) {
              ellipse(bulletX, bulletY, bulletSize, bulletSize);
              --bulletY;
              for(var i = 0; i < POPULATION_SIZE; ++i) {
                var target = population[i];
                if ((bulletX - target.x <= target.size/2 || target.x - bulletX <= target.size/2) && bulletY <= target.y && target.size > 0 && target.humanoidType == "zombie" && bulletSize == 1.5) {
                  --zombieCount;
                  target.size = 0;
                  bulletSize = 0;
                  fill(125, 0, 0);
                  ellipse(bulletX, bulletY, 10, 10);
                }
              }
            }
          }
        }
      },
    draw: function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    },
    isTouching: function(target) {
      if (this.humanoidType == target.humanoidType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2);
    }
  };
}