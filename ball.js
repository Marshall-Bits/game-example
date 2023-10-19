class Ball {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.velocity = 3;
        this.directionX = "right";
        this.directionY = "down";
        this.element = document.getElementById("ball");
    }

    moveBall() {

        if (this.directionY === "down") {
            this.y += this.velocity;
            if (this.y >= container.clientHeight - this.element.clientHeight) {
                this.directionY = "up";
            }
        } else {
            this.y -= this.velocity;
            if (this.y <= 0) {
                this.directionY = "down";
            }
        }

        if (this.directionX === "right") {
            this.x += this.velocity;
            if (this.x >= container.clientWidth - this.element.clientWidth) {
                this.directionX = "left";
            }
        }
        else {
            this.x -= this.velocity;
        }


        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";

    }

    checkCollision(racket) {
        if (this.x + this.element.clientWidth >= racket.x
            && this.x <= racket.x + racket.element.clientWidth
            && this.y + this.element.clientHeight >= racket.y
            && this.y <= racket.y + racket.element.clientHeight) {

            this.directionX = "right";

        }
    }

    checkGameOver() {
        if (this.x <= 0) {
            return true;
        }else{
            return false;
        }
    }
}