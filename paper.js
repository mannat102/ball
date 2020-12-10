class Paper{
    constructor(x,y,height,angle) {
       var options={
          'isStatic':false,
            'restitution':0.8,
           'friction':0.3,
            'density':1.2
        };
        this.body = Bodies.circle(x,y,20,options);
       this.width=20
     
       Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body);
    }
    
   display(){
  var pos=this.body.position;   
var angle=this.body.angle;
push()
translate(pos.x, pos.y);
rotate(angle);
ellipseMode(RADIUS);
strokeWeight(4);
stroke("green")
fill(255);
ellipse(0,0,this.width,this.width);
pop()
   }
};
    





    
    
    
    
    
    
    















    
       



   