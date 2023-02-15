class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

// this code that adds an 'area' method to the Rectangle class' prototype

    Rectangle.prototype.area = function (){
        return this.w * this.h;
    }
//this code Create a Square class that inherits from Rectangle and implement its class constructor

class Square extends Rectangle{
    constructor(width){
        super(width, width);
    }
}
