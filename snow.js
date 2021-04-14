class Snow {
    constructor(x, y) {

        var options ={
            restitution:0.4
        }
        this.image=loadImage("snow4.webp")
       
      
             
       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
       
        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        noStroke();
        
        
        
        pop();
    }

};