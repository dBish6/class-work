package com.keyin.qap4.shapes.abstraction;

import com.keyin.qap4.shapes.exceptions.InvalidInputException;

import java.util.ArrayList;

public class AbstactionTestDemo {

    public static void main(String[] args) throws InvalidInputException {

        ArrayList<Shape> classes = new ArrayList<Shape>();
        classes.add(new Circle("White", true, 5.0));
        classes.add(new Ellipse("Purple", true, 4.0, 6.0));
        classes.add(new Triangle("Yellow", false, 7.0, 7.0, 10.0));
        classes.add(new EquilateralTriangle("Black", false, 11.0, 11.0, 11.0));

        for (int i = 0; i < classes.size(); i++) {
            System.out.println(classes.get(i));
        }
    }
}
