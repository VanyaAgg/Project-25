class Bin {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.image = loadImage("sprites/dustbingreen.png");
        
        this.w = width;
        this.h = height;

        this.leftBody();
        this.rightBody();
      this.bottomBody();

        World.add (world,this.body);
console.log(this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
         pop();

         push();
         translate(pos.x, pos.y);
         rotate(angle);
         imageMode(CENTER);
         pop();

         push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image, 0, 0, this.width, this.height);
         pop();



    }
}