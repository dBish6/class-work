package com.keyin.qap4.shapes.interfaces;

public class Ellipse extends Shape implements Scalable {
    // Instance Variables
    private double axesA;
    private double axesB;

    // Constructors
    public Ellipse() {
        super();
        this.axesA = 0.0; this.axesB = 0.0;
    }

    public Ellipse(double axesA, double axesB) {
        super();
        this.axesA = axesA; this.axesB = axesB;
    }

    public Ellipse(String colour, boolean filled, double axesA, double axesB) {
        super(colour, filled);
        this.axesA = axesA; this.axesB = axesB;
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

    public double getAxesA() {
        return axesA;
    }

    public double getAxesB() {
        return axesB;
    }

    public void setAxesA(double axesA) {
        this.axesA = axesA;
    }

    public void setAxesB(double axesB) {
        this.axesB = axesB;
    }

    // Custom Methods
    // Abstract Method
    @Override
    public double getArea() {
        return PI * this.axesA * this.axesB;
    }
    // Abstract Method
    @Override
    public double getPerimeter() {
        if (this.axesA == this.axesB) {
            double radius = this.axesA + this.axesB;
            return 2 * PI * radius;
        } else {
            return PI * Math.sqrt(2 * ((this.axesA * this.axesA) + (this.axesB * this.axesB))
                    - (((this.axesA - this.axesB) * (this.axesA - this.axesB)) / 2));
        }
    }
    // Abstract Method
    @Override
    public String toString() {
        return "Ellipse[colour= " + this.colour + ", filled= " + this.filled + ", axesA= " + this.axesA
                + ", axesB= " + this.axesB + "]";
    }
    // Interface Method
    @Override
    public void scale(double scaleFactor) {
        this.axesA *= scaleFactor; this.axesB *= scaleFactor;
    }
}
