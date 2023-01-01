package com.keyin.qap4.shapes.interfaces;

import com.keyin.qap4.shapes.exceptions.InvalidInputException;

public class EquilateralTriangle extends Triangle {
    // Constructors
    public EquilateralTriangle() {
        super();
        this.side1 = 0.0;
        this.side2 = 0.0;
        this.side3 = 0.0;
    }

    public EquilateralTriangle(double side1, double side2, double side3) throws InvalidInputException {
        super(side1, side2, side3);
        if (side1 != side2 || side1 != side3 || side2 != side3) {
            throw new InvalidInputException("ERROR: Must be a Equilateral Triangle; all sides are not equal.");
        }
    }

    public EquilateralTriangle(String colour, boolean filled, double side1, double side2, double side3)
            throws InvalidInputException
    {
        super(colour, filled, side1, side2, side3);
        if (side1 != side2 || side1 != side3 || side2 != side3) {
            throw new InvalidInputException("ERROR: Must be a Equilateral Triangle; all sides are not equal.");
        }
    }

    @Override
    public String toString() {
        return "EquilateralTriangle[colour= " + this.colour + ", filled= " + this.filled
                + ", side1= " + this.side1 + ", side2= " + this.side2 + ", side3= " + this.side3 + "]";
    }
}
