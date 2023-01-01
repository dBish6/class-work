package com.keyin.qap4.shapes.interfaces;

import com.keyin.qap4.shapes.exceptions.InvalidInputException;

public class Triangle extends Shape implements Scalable {
    // Instance Variables
    protected double side1;
    protected double side2;
    protected double side3;

    // Constructors
    public Triangle() {
        super();
        this.side1 = 0.0;
        this.side2 = 0.0;
        this.side3 = 0.0;
    }

    public Triangle(double side1, double side2, double side3) throws InvalidInputException {
        super();
        if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
        this.side1 = side1; this.side2 = side2; this.side3 = side3;
        } else {
            throw new InvalidInputException("ERROR: The sides that has been given does not make a triangle.");
        }
    }

    public Triangle(String colour, boolean filled, double side1, double side2, double side3)
            throws InvalidInputException
    {
        super(colour, filled);
        if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
            this.side1 = side1; this.side2 = side2; this.side3 = side3;
        } else {
            throw new InvalidInputException("ERROR: The sides that has been given does not make a triangle.");
        }
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

    public double getSide1() {
        return side1;
    }

    public double getSide2() {
        return side2;
    }

    public double getSide3() {
        return side3;
    }

    public void setSide1(double side1) {
        this.side1 = side1;
    }

    public void setSide2(double side2) {
        this.side2 = side2;
    }

    public void setSide3(double side3) {
        this.side3 = side3;
    }

    // Custom Methods
    // Abstract Method
    @Override
    public double getArea() {
        double s = (this.side1 + this.side2 + this.side3)/2;
        return Math.sqrt(s * (s - side1)*(s - side2)*(s - side3));
    }
    // Abstract Method
    @Override
    public double getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    // Abstract Method
    @Override
    public String toString() {
        return "Triangle[colour= " + this.colour + ", filled= " + this.filled
                + ", side1= " + this.side1 + ", side2= " + this.side2 + ", side3= " + this.side3 + "]";
    }
    // Interface Method
    @Override
    public void scale(double scaleFactor) {
        this.side1 *= scaleFactor;
        this.side2 *= scaleFactor;
        this.side3 *= scaleFactor;
    }
}
