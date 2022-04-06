class Snake {
    constructor(game) {
        this.game = game;
        this.posX = GAME_WIDTH / 2;
        this.posY = GAME_HEIGHT / 2;

        this.eye = new Eye(this);

        this.tailpos = [];
        this.createTails();

        this.angle = 0;

        this.listenMouseEvent();
    }

    createTails() {
        for (let i = 0; i < 150; i++) {
            this.tailpos.push({
                x: this.posX - (i * SNAKE_SPEED),
                y: this.posY
            })
        }
    }

    draw() {
        // this.tailpos.forEach(pos => {
        //     this.game.screen.drawCircle({ x: pos.x, y: pos.y}, 'snake');
        // });
        for (let i = this.tailpos.length - 1; i > 1; i--) {
            if (i % 1 == 0) {
                this.game.screen.drawCircle({ x: this.tailpos[i].x, y: this.tailpos[i].y }, 'shadow');
            }
            if (i % 4 == 0) {
                this.game.screen.drawCircle({ x: this.tailpos[i].x, y: this.tailpos[i].y }, 'snake');
            }
        }


        ///draw head
        this.game.screen.drawCircle({
            x: this.posX, y: this.posY
        }, 'snake');

        //draw eye
        this.eye.draw()


    }

    update() {
        // this.posX++;
        //sin = d/h
        // cos = k/h
        let newTailPos = {
            x: this.posX += Math.cos(this.angle) * SNAKE_SPEED,
            y: this.posY += Math.sin(this.angle) * SNAKE_SPEED
        }

        this.tailpos.unshift(newTailPos);

        this.tailpos.pop();

        this.posX = newTailPos.x;
        this.posY = newTailPos.y;
    }

    listenMouseEvent() {
        this.game.canvas.addEventListener('mousemove', (event) => {
            var rect = this.game.canvas.getBoundingClientRect();
            this.processMouseMove({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        });
    }

    processMouseMove(mousePos) {
        this.angle = Math.atan2(
                mousePos.y - (SCREEN / 2),
                mousePos.x - (SCREEN / 2)
            );
        // let angle_before = this.angle;
        // let angle_after = Math.atan2(
        //     mousePos.y - (SCREEN / 2),
        //     mousePos.x - (SCREEN / 2)
        // );

        // if(Math.abs(angle_before - angle_after) < Math.PI && Math.abs(angle_before - angle_after) > 2.5){
        //     this.angle = angle_after+ Math.PI/3
        // }else{
        //     this.angle = angle_after
        // }
        // console.log("af",angle_after);
        // console.log("be",angle_before);

    }
}