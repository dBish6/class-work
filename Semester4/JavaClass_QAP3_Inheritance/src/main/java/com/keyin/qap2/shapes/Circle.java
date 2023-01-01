package com.keyin.qap2.shapes;

public class Circle extends Shape {
    // Instance Variable
    private double radius;

    // Constructors
    public Circle() {
        super();
        this.radius = 1.0;
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

    @Override
    public String toString() {
        return "Circle[colour= " + this.colour + ", filled= " + this.filled + ", radius= " + this.radius + "]";
    }
}
