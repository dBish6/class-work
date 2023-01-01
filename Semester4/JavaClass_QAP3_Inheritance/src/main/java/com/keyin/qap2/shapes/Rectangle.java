package com.keyin.qap2.shapes;

public class Rectangle extends Shape {
    // Instance Variables
    protected double width;
    protected double length;

    // Constructors
    public Rectangle() {
        super();
        this.width = 1.0; this.length = 1.0;
    }

    public Rectangle(double width, double length) {
        this.width = width; this.length = length;
    }

    public Rectangle(String colour, boolean filled, double width, double length) {
        super(colour, filled);
        this.width = width; this.length = length;
    }

    // Getters and Setters
    public double getWidth() {
        return width;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    // Custom Methods
    // Abstract Method
    @Override
    public double getArea() {
        return this.length * this.width;
    }
    // Abstract Method
    @Override
    public double getPerimeter() {
        return 2 * (this.length + this.width);
    }

    @Override
    public String toString() {
        return "Rectangle[colour= " + this.colour + ", filled= " + this.filled + ", width= " + this.width
                + ", length= " + this.length + "]";
    }
}
