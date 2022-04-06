class BackGround {
    constructor(game) {
        this.game = game;
        this.foods = [];
    }

    update() {

    }

    drawFood() {
        let n = Math.floor(Math.random() * 200);
        for (let i = 0; i < 200; i += 40) {
            this.game.screen.drawCircle({ x: this.game.snake.posX + n, y: this.game.snake.posY + n }, 'food')
        }
    }

    drawLine(startPos, endPos) {
        this.game.ctx.strokeStyle = "#d9d9d9";
        this.game.ctx.lineWidth = 3;
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(startPos.x, startPos.y);
        this.game.ctx.lineTo(endPos.x, endPos.y);
        this.game.ctx.stroke();

    }

    drawBorder(){
        this.game.screen.drawCircle({x : GAME_WIDTH/2, y: GAME_HEIGHT/2}, "border");
    }

    draw() {
        let firstLineX = GRID_SIZE - (this.game.snake.posX % GRID_SIZE);

        let currentLineX = firstLineX;
        while (currentLineX <= SCREEN) {
            this.drawLine(
                { x: currentLineX, y: 0 },
                { x: currentLineX, y: SCREEN }
            );
            currentLineX += GRID_SIZE;
        }

        let firstLineY = GRID_SIZE - (this.game.snake.posY % GRID_SIZE);
        let currentLineY = firstLineY;
        while (currentLineY <= SCREEN) {
            this.drawLine(
                { x: 0, y: currentLineY },
                { x: SCREEN, y: currentLineY }
            );
            currentLineY += GRID_SIZE;
        }
        //this.drawFood()
    }
}