class Rope{
    constructor(bodyA, pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 1.2,
            'length':400
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
    
        if(this.rope.bodyA){
            push();
            stroke("black");
            strokeWeight(3);
            line(this.pointB.x,this.pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}