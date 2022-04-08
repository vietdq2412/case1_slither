class Screen{
    
    constructor(game){
        this.game = game;
        this.top = 0;
        this.bot = 0;
        this.left = 0;
        this.right = 0;
    }
    
    update(){
        this.top = this.game.snake.posY - SCREEN/2;
        this.bot = this.game.snake.posY + SCREEN/2;
        this.left = this.game.snake.posX - SCREEN/2;
        this.right = this.game.snake.posX + SCREEN/2;
    }

    drawCircle(pos, styleName){
        let styles = {};
        styles['snake'] = {
            color: 'rgba(200, 155, 0, 1)',
            boderColor: 'rgba(0, 80, 0, 0.1)',
            width: SNAKE_SIZE
        };
        styles['shadow'] = {
            color: 'rgba(0, 0, 0, 0.05)',
            boderColor: 'rgba(0, 0, 0, 0.07)',
            width: SNAKE_BORDER
        };
        styles['eye'] = {
            color: EYES_COLOR,
            boderColor: EYES_BORDER,
            width: EYES_SIZE
        };

        //border
        styles['border'] = {
            color: 'rgba(200, 155, 0, 0)',
            boderColor: 'rgba(0, 80, 0, 1)',
            width: GAME_WIDTH/2 + SNAKE_SIZE
        };

        ///food
        styles['food'] = {
            color: 'rgba(200, 155, 0, 1)',
            boderColor: 'rgba(0, 80, 0, 0.1)',
            width: FOOD_SIZE
        };
        styles['red_food'] = {
            color: 'rgba(200, 20, 0, 1)',
            boderColor: 'rgba(0, 80, 0, 0.1)',
            width: FOOD_SIZE
        };

        let styleProperties = styles[styleName]
        this.game.ctx.beginPath();
        this.game.ctx.arc(
            pos.x - this.left,
            pos.y - this.top,
            styleProperties.width,0, Math.PI * 2
        );
        this.game.ctx.fillStyle = styleProperties.color;
        this.game.ctx.fill();
        this.game.ctx.strokeStyle = styleProperties.boderColor;
        this.game.ctx.stroke();
    }
}