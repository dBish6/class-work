package com.keyin.qap4.shapes.interfaces;

public class Circle extends Shape implements Scalable {
    // Instance Variable
    private double radius;

    // Constructors
    public Circle() {
        super();
        this.radius = 0.0;
    }

    public Circle(double radius) {
        super();
        this.radius = radius;
    }

    public Circle(String colour, boolean filled, double radius) {
        super(colour, filled);
        this.radius = radius;
    }

    // Getters and Setters
    // Abstract Method
    @Override
    public String getColour() {
        return super.colour;
    }
    // Abstract Method
    @Override
    public boolean isFilled() {
        return super.filled;
    }
    // Abstract Method
    @Override
    public void setColour(String colour) {
        super.colour = colour;
    }
    // Abstract Method
    @Override
    public void setFilled(boolean filled) {
        super.filled = filled;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    // Custom Methods
    // Abstract Method
    @Override
    public double getArea() {
        return PI * this.radius * this.radius;
    }
    // Abstract Method
    @Override
    public double getPerimeter() {
        return 2 * PI * this.radius;
    }
    // Abstract Method
    @Override
    public String toString() {
        return "Circle[colour= " + this.colour + ", filled= " + this.filled + ", radius= " + this.radius + "]";
    }
    // Interface Method
    @Override
    public void scale(double scaleFactor) {
        this.radius *= scaleFactor;
    }
}
