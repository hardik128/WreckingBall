class Box{
    constructor(x,y,width,height){
        var options={
            friction:0.5,
            restitution:0.1,
            density:2     
        }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)  
      World.add(world,this.body)  
    }
    display(){
      var position = this.body.position  
      push();
      translate(position.x,position.y); 
      rectMode(CENTER)
      rect(this.x,this.y,this.width,this.height) 
      pop();
    } 

}