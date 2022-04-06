class Food {
    constructor(game, x, y) {
        this.game = game;
        this.foods = [];
        this.x = x;
        this.y = y;

        this.createFoods();
    }

    createFoods() {
        for (let i = 0; i < 100; i++) {
            let rx = Math.floor(Math.random() * GAME_WIDTH);
            let ry = Math.floor(Math.random() * GAME_HEIGHT);
            this.foods.push({
                x: rx,
                y: ry
            })
        }
    }

    draw() {
        for (let i = 0; i < this.foods.length; i++) {
            this.game.screen.drawCircle({
                x: this.foods[i].x, y: this.foods[i].y
            }, 'food');
        }
    }

    checkEaten() {
        for (let i = 0; i < this.foods.length; i++) {
            let sX = this.game.snake.posX;
            let sY = this.game.snake.posY;
            let x = this.foods[i].x;
            let y = this.foods[i].y;

            let eatenCondition = (Math.pow(Math.abs(x-sX),2) + Math.pow(Math.abs(y-sY),2) - Math.pow(FOOD_SIZE+SNAKE_SIZE,2) <= 0);

            //let eatenCondition = y == sY || x == sX;
            if (eatenCondition) {
                this.foods.splice(i,1);
                return true;     
            } 
        }
        return false
    }


}