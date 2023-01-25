class Drop{
    constructor(x,y){
        var options={
            friction:0.001,
            restitution:0.1
        }
        this.rain=Bodies.circle(x,y,5,options)
        this.r=5
        World.add(world,this.rain)
    }
    display(){
        var pos = this.rain.position
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)

    }
    updateDrop(){
        if(this.rain.position.y>height){
            Body.setPosition(this.rain,{x:random(0,400),y:random(-200,100)})
        }
    }

}