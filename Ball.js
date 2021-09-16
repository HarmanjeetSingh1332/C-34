class Ball{
    constructor(x, y) {
        var options = {
            'frictionAir':0.005,
            'density':0.1
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
      }
}