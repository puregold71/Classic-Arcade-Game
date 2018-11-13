// Enemies our player must avoid
class Enemy {
    // declare location (x, y) and speed variables
    constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += (this.speed * dt)
    if(this.x > 505) {
      this.x = -100;
    }


};

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

}; //end Enemy Class definition

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  //set default values for x,y coordinates of player
  constructor(x = 200, y = 385) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-pink-girl.png';
}

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  update() {
    if(this.x < 0) {
      this.x = 0;
    }
    if(this.x > 505) {
      this.x = 505;
    }
    if(this.y < -15) {
      this.y = 385;
    }
    if(this.y > 385) {
      this.y = 385;
    }

  }

  handleInput(keypress){
    switch(keypress) {
      case 'left':
          this.x -= 100;
          break;
      case 'right':
          this.x += 100;
          break;
      case 'up':
          this.y -= 80;
          break;
      case 'down':
          this.y += 80;
          break;
    }
    }

} //end Player Class definition


  // Now instantiate your objects.
  const enemy1 = new Enemy(100, 65, 150);
  const enemy2 = new Enemy(-75, 65, 150);
  const enemy3 = new Enemy(0, 145, 100);
  const enemy4 = new Enemy(250, 230, 230);
  const enemy5 = new Enemy(-10, 230, 230);
  const enemy6 = new Enemy(300, 145, 100);
  // Place all enemy objects in an array called allEnemies
  const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6]
  // Place the player object in a variable called player
  const player = new Player()


  // This listens for key presses and sends the keys to your
  // Player.handleInput() method. You don't need to modify this.


document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
e.preventDefault


    player.handleInput(allowedKeys[e.keyCode]);
});
