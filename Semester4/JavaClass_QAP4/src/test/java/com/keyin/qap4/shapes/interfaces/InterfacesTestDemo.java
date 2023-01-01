package com.keyin.qap4.shapes.interfaces;

import com.keyin.qap4.shapes.exceptions.InvalidInputException;

public class InterfacesTestDemo {

    public static void main(String[] args) throws InvalidInputException {

        Circle c1 = new Circle("White", true, 5.0);
        Ellipse e1 = new Ellipse("Purple", true, 4.0, 6.0);
        Triangle t1 = new Triangle("Yellow", false, 7.0, 7.0, 10.0);
        EquilateralTriangle et1 = new EquilateralTriangle("Black", false, 11.0, 11.0, 11.0);
        Scalable[] classes = {c1, e1, t1, et1};

        System.out.println("*Before Scaling");
        for (int i = 0; i < classes.length; i++) {
            System.out.println(classes[i]);
        }

        System.out.println("\n*After Scaling");
        scaleNow(classes, 3.5);
        for (int i = 0; i < classes.length; i++) {
            System.out.println(classes[i]);
        }
    }

    static void scaleNow(Scalable[] arr, double scaleFactor) {
        for (Scalable obj : arr) {
            obj.scale(scaleFactor);
        }
    }
}
