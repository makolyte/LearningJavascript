var Entity = function(x, y, speed, image)
{
    this.sprite = image;
    this.y = y
    this.x = x
    this.speed = speed
}

Entity.prototype.update = function(dt) {
    this.x += this.speed * dt;
};
Entity.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Pseudoclassical pattern
var Enemy = function(x, y, speed) {
    Entity.call(this, x, y, speed, 'images/enemy-bug.png')
};
Enemy.prototype = Object.create(Entity.prototype)
Enemy.prototype.constructor = Enemy



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(-50, 50, 50*2)
var enemy2 = new Enemy(-100, 50+85, 25)
var enemy3 = new Enemy(-100, 50+85+85, 50*2)
var allEnemies = [enemy1, enemy2, enemy3]
// Place the player object in a variable called player

var Player = function(x, y, speed){
    Entity.call(this, x, y, speed, 'images/char-boy.png')
}
Player.prototype = Object.create(Entity.prototype)
Player.prototype.constructor = Player
Player.prototype.update = function(dt){
    this.y -= this.speed ;
}//override, do nothing

Player.prototype.handleInput = function(key)
{
    //do nothing, make the player AI only
}
var player = new Player(300, 400, 1)


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
