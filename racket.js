class Racket {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.velocity = 15;
        this.element = document.querySelector("#racket");
        this.container = document.querySelector("#container");
    }

 /*    moveRacket(event) {
        if (event.key === "ArrowDown") {
            this.y += this.velocity;
            if (this.y >= this.container.clientHeight - this.element.clientHeight) {
                this.y = this.container.clientHeight - this.element.clientHeight;
            }
        }
        if (event.key === "ArrowUp") {
            this.y -= this.velocity;
            if (this.y <= 0) {
                this.y = 0;
            }
        }

        this.element.style.top = this.y + "px";
    } */

/*     moveRacket(event) {
        switch (event.key) {
            case "ArrowDown":
                this.y += this.velocity;
                break;
            case "ArrowUp":
                this.y -= this.velocity;
                break;
        }
    
        // Ensure the racket's position stays within the container bounds
        this.y = Math.max(0, Math.min(this.y, this.container.clientHeight - this.element.clientHeight));
    
        this.element.style.top = this.y + "px";
    } */

    moveRacket(event) {
        const mouseY = event.clientY; // Get the mouse Y-coordinate
    
        // Calculate the new position of the racket based on the mouse Y-coordinate
        this.y = mouseY - this.element.clientHeight / 2;
    
        // Ensure the racket's position stays within the container bounds
        this.y = Math.max(0, Math.min(this.y, this.container.clientHeight - this.element.clientHeight));
    
        // Update the racket's position
        this.element.style.top = this.y + "px";
    }
    
    
}