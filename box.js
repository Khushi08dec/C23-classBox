class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.99,
        'density':100000,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();  //capture initial position and angle
    translate(pos.x, pos.y); //shifting (from any x and y)
    rotate(angle);  //rotates after shifitng 
  
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height); //0,0 represents the initial position of the rect before falling
    pop(); //sends rect back to pos captured by "push"

  }
};
