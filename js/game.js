class Game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN;
        this.canvas.height = SCREEN;
        document.body.appendChild(this.canvas);

        this.point = 0;

        this.screen = new Screen(this);
        this.snake = new Snake(this);
        this.bg = new BackGround(this);
        this.food = new Food(this);
        this.loop();
    }

    checkGameBoundary(){
       return Math.pow(this.snake.posX - GAME_WIDTH/2,2) + Math.pow(this.snake.posY - GAME_HEIGHT/2,2) - Math.pow(GAME_WIDTH/2,2) >=0;
    }
    checkEaten(){
        return this.food.checkEaten();
    }

    loop() {
        this.update();
        this.draw();
        let borderCondition = this.checkGameBoundary();
        if(borderCondition){
            alert("game over!")
            return;
        }

        if(this.food.checkEaten()){
            this.snake.eat();
            this.point += 1;
            console.log("eat!");           
        }   
        setTimeout(() => this.loop(), 20);
    }

    update() {
        document.getElementById('point').innerHTML = this.point;
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
var g = new Game();