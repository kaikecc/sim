function Cell(x,y,w){

    this.x = x;
    this.y = y;
    this.w = w;
    this.bee = true;
    this.revealed = true;
}

Cell.prototype.show = function(){
    stroke(0);
    fill(255);
    
    rect(this.x, this.y, this.w, this.w);
}

Cell.prototype.contains = function(x, y){
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.colored = function(){    
    return true;
}