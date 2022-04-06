

class Eye{
    constructor(snake){
        this.snake = snake;
    }

    update(){

    }

    draw(){
        let eyePos = {
            x : this.snake.posX + Math.cos(this.snake.angle - EYES_ANGLE)*EYES_DISTANCE,
            y : this.snake.posY + Math.sin(this.snake.angle - EYES_ANGLE)*EYES_DISTANCE,
        }

        this.snake.game.screen.drawCircle(eyePos, 'eye');

        let eyePos2 = {
            x : this.snake.posX + Math.cos(this.snake.angle + EYES_ANGLE)*EYES_DISTANCE,
            y : this.snake.posY + Math.sin(this.snake.angle + EYES_ANGLE)*EYES_DISTANCE,
        }

        this.snake.game.screen.drawCircle(eyePos2, 'eye');
    }
}