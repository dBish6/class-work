package com.keyin.qap2.shapes;

public class Square extends Rectangle {
    // Constructors
    public Square() {
        super();
    }

    public Square(double side) {
        super(side, side);
    }

    public Square(String colour, boolean filled, double side) {
        // Width and length; using side parameter.
        super(colour, filled, side, side);
    }

    // Getters and Setters
    public double getSide() {
        return super.length + super.width;
    }

    public void setSide(double side) {
        super.length = side; super.width = side;
    }

    @Override
    // Why did you make me put setWidth() and setLength() here when the sides are supposed to be the same for a square?
    public void setWidth(double side) {
        super.width = side;
    }

    @Override
    public void setLength(double side) {
        super.length = side;
    }

    public void setLengthWidth(double side) {
        super.width = side; super.length = side;
    }

    @Override
    public double getArea() {
        return this.length * this.width;
    }

    @Override
    public double getPerimeter() {
        return 2 * (this.length + this.width);
    }

    // Custom Methods
    @Override
    public String toString() {
        return "Square[colour= " + this.colour + ", filled= " + this.filled + ", side1= " + this.width + ", side2= "
                + this.length + "]";
    }
}
