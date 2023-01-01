package com.keyin.qap2.shapes;

public class ShapesTestDemo {

    public static void main(String[] args) {

        // I made the Shape class abstract because it makes sense, hope that's okay:)
        // Shape S = new Shape("Red", true);

        // Circle...
        Circle c1 = new Circle(5.0);
        Circle c2 = new Circle("Red", true, 7.0);
        System.out.println("c1: " + c1);
        System.out.println("c2: " + c2);
        System.out.println("c1 Area: " + c1.getArea());
        System.out.println("c1 Perimeter: " + c1.getPerimeter());
        System.out.println("c2 Area: " + c2.getArea());
        System.out.println("c2 Perimeter: " + c2.getPerimeter() + "\n");

        //Rectangle...
        Rectangle r1 = new Rectangle(2.0, 3.0);
        Rectangle r2 = new Rectangle("Green", false, 6.0, 8.0);
        System.out.println("r1: " + r1);
        System.out.println("r2: " + r2);
        System.out.println("r1 Area: " + r1.getArea());
        System.out.println("r1 Perimeter: " + r1.getPerimeter());
        System.out.println("r2 Area: " + r2.getArea());
        System.out.println("r2 Perimeter: " + r2.getPerimeter() + "\n");

        //Square
        Square s1 = new Square(4.0);
        Square s2 = new Square("Yellow", true, 6.0);
        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);
        System.out.println("s1 Area: " + s1.getArea());
        System.out.println("s1 Perimeter: " + s1.getPerimeter());
        System.out.println("s2 Area: " + s2.getArea());
        System.out.println("s2 Perimeter: " + s2.getPerimeter() + "\n");
    }
}
