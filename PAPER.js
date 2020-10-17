class Paper{ 
    constructor(x,y,radius){ 
    var options = {
      isStatic:false,
     restituition:0.1, 
     friction:0.2,
      density:1.2
    } 
    this.body = Bodies.circle(x,y,radius,options); 
    this.radius = radius;
    World.add(world, this.body); 
}
     display(){ 
        
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill("blue"); 
        ellipse(0,0,this.radius); 
        pop()
    
    } 
}
