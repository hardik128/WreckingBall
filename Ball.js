class Ball{
    constructor(x,y,r){
        var options={
          isStatic:false,  
          friction:0.5,
          restitution:0.1,
          density:2
          }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(x,y,r,options)  
      World.add(world,this.body)  
    }
    display(){
        
      push();
      ellipseMode(CENTER)
      ellipse(this.body.position.x,this.body.position.y,this.body.r,this.body.r) 
      pop();
    } 

}