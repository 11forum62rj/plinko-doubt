class Particle{
    constructor(){}

    display(){
    this.body = Bodies.circle(x,y,this.releaseEvents,options);
    this.color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    }
}