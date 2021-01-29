class Polygon{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'frictionAir': 0.005,
            'density':0.01
        }
        this.body =  Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.image= loadImage("sprites/polygon.png");

    this.width = width;
    this.height = height;
  

}

display(){
    var pos = this.body.position
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,55,55)
}

}