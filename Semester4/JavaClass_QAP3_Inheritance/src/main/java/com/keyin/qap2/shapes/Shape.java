package com.keyin.qap2.shapes;

public abstract class Shape {
    // Instance Variables
    protected String colour;
    protected boolean filled;
    protected static final double PI = 3.14;

    // Constructors
    public Shape() {
        this.colour = "green";
        this.filled = true;
    }

    public Shape(String colour, boolean filled) {
        this.colour = colour;
        this.filled = filled;
    }

    // Getters and Setters
    public String getColour() {
        return colour;
    }

    public boolean isFilled() {
        return filled;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public void setFilled(boolean filled) {
        this.filled = filled;
    }

    // Abstract Methods; to be defined in child classes.
    public abstract double getArea();
    public abstract double getPerimeter();
    @Override
    public abstract String toString();
}
