class Paper {
constructor(x,y) {
    var options = {
       isStatic : false,
       restitution : 0.3,
       friction : 0.5,
       density : 25, 
    }
    this.body = Bodies.circle(x,y,35,options);
    this.radius = 35;
    this.image = loadImage("sprites/crumpledpaper.png");
    World.add(world,this.body);
}
display() {
var angle = this.body.angle;
push ();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
ellipseMode(RADIUS);
//fill ("purple");
//ellipse(0, 0, this.radius);
image(this.image,this.body.position.x,this.body.position.y, this.body.radius);
pop ();
}

}