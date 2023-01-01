package com.keyin.qap4.shapes.interfaces;

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
    public abstract String getColour();

    public abstract boolean isFilled();

    public abstract void setColour(String colour);

    public abstract void setFilled(boolean filled);

    // Abstract Methods; to be defined in child classes.
    public abstract double getArea();
    public abstract double getPerimeter();
    @Override
    public abstract String toString();
}
