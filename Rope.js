class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 400
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
 
    display(){
    var pointA = this.sling.bodyA.position
    var pointB = this.pointB
            push();
            strokeWeight(3)
            stroke("red")
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            
            pop();
        
    }
    
}