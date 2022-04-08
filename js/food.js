class Food {
    constructor(game, x, y) {
        this.game = game;
        this.foods = [];
        this.dictFoods = {};
        this.x = x;
        this.y = y;

        this.createFoods();
    }

    createFoods() {
        for (let i = 0; i < number_of_food+number_of_red_food; i++) {
            let rx = Math.floor(Math.random() * GAME_WIDTH);
            let ry = Math.floor(Math.random() * GAME_HEIGHT);

            let type = true;
            if (i < number_of_food) {
                type = true;
            }else{
                type = false;
            }

            let value = {
                type: type,
                x: rx,
                y: ry
            }
            this.dictFoods[i] = value;
            // this.foods[key]
            this.foods.push({
                x: rx,
                y: ry
            })
        }
    }

    draw() {
        // for (let i = 0; i < this.foods.length; i++) {
        //     this.game.screen.drawCircle({
        //         x: this.foods[i].x, y: this.foods[i].y
        //     }, 'food');
        // }
        for (let i = 0; i < number_of_food+number_of_red_food; i++) {
                let foodType;
            if(this.dictFoods[i].type){
                foodType = 'food';
            }else{
                foodType = 'red_food';
            }

            let x = this.dictFoods[i].x;
            let y = this.dictFoods[i].y;

            this.game.screen.drawCircle({
                x: x, y: y
            }, foodType);      
        }
    }

    checkEaten() {
        for (let i = 0; i < number_of_food+number_of_red_food; i++) {
            let sX = this.game.snake.posX;
            let sY = this.game.snake.posY;
            // let x = this.foods[i].x;
            // let y = this.foods[i].y;
            let x = this.dictFoods[i].x;
            let y = this.dictFoods[i].y;

            let eatenCondition = (Math.pow(Math.abs(x-sX),2) + Math.pow(Math.abs(y-sY),2) - Math.pow(FOOD_SIZE+SNAKE_SIZE,2) <= 0);

            //let eatenCondition = y == sY || x == sX;
            if (eatenCondition) {
                this.dictFoods[i].x = 0;
                this.dictFoods[i].y = 0;
                if(this.dictFoods[i].type){
                    return 'yellow';
                }else{
                    return 'red';
                }  
            }

        }
    };


}