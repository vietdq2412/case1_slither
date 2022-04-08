class Game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.style = 'margin: auto; position: negative;';
        this.canvas.id = 'canvas';

        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN;
        this.canvas.height = SCREEN;
        document.getElementById('game').appendChild(this.canvas);

        this.point = 0;

        this.screen = new Screen(this);
        this.snake = new Snake(this);
        this.bg = new BackGround(this);
        this.food = new Food(this);
        this.loop();
    }

    checkGameBoundary() {
        return Math.pow(this.snake.posX - GAME_WIDTH / 2, 2) + Math.pow(this.snake.posY - GAME_HEIGHT / 2, 2) - Math.pow(GAME_WIDTH / 2, 2) >= 0;
    }

    checkEaten() {
        return this.food.checkEaten();
    }

    isOver(){
        if(this.point < -10){
            return true;
        }
    }

    loop() {
        let borderCondition = this.checkGameBoundary();
        if (borderCondition || this.isOver()) {
            alert("game over!")
            return;
        }
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 20);
    }

    update() {
        document.getElementById('point').innerHTML = this.point;
        let type = this.food.checkEaten();
        if (type == 'yellow') {
            this.snake.eat(true);
            this.point += 1;
            console.log("yumi!");
        }else if(type == 'red'){
            this.snake.eat(false);
            this.point -= 5;
            console.log("eww!");
        }
        this.screen.update();
        this.bg.update();
        this.snake.update();
    }

    draw() {
        this.clearScreen();
        this.bg.draw();
        this.food.draw()
        this.snake.draw();
        this.bg.drawBorder();
    }

    clearScreen() {
        this.ctx.fillStyle = '#f2f2f2';
        this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }
}

var g;
function run() {
    let game = document.getElementById('game');
    if (game.firstElementChild) {
        game.removeChild(game.firstElementChild);
    }
    g = new Game();
}