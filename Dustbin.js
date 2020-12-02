class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic : false ,
            friction : 1 ,
            restitution : 0 ,
            density : 10 
        };

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height; 

    }

    display(){
        var pos  = this.body.position;
        rectMode(CENTER);
        fill ("yellow");
        rect (pos.x,pos.y,this.width,this.height)
    }

}