package com.keyin.qap2.point;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.Assertions;


public class MyCircleTest {

//    public static void main(String args[]) {
//
//        MyCircle test = new MyCircle();
//        MyPoint test2 = new MyPoint();
//
//        System.out.println(test);
//        System.out.println(test2);
//    }

    static MyPoint p1 = new MyPoint(10, 10);
    static MyPoint p2 = new MyPoint(6, 9);
    static MyCircle c1 = null;
    static MyCircle c2 = null;

    @BeforeAll
    public static void before() {
        System.out.println("Initial setup running...");
        c1 = new MyCircle(p1, 3);
        c2 = new MyCircle(p2, 4);

        System.out.println("Tests start...\n");
    }

    @Test // Basic Getters and Setters Tests
    public void gettersSettersTest() {
        System.out.println("*Running: gettersSettersTest()*");

        Assertions.assertNotNull(c1);
        System.out.println("Initial new MyCircle1 instance working: " + c1);

        Assertions.assertEquals(3, c1.getRadius());
        System.out.println("getRadius() method passed: " + c1.getRadius());

        Assertions.assertEquals(p1, c1.getCenter());
        System.out.println("getCenter() method passed: " + c1.getCenter());

        c1.setRadius(6);
        Assertions.assertEquals(6, c1.getRadius());
        System.out.println("setRadius() method passed: " + c1.getRadius());

        MyPoint newPoint;
        c1.setCenter(newPoint = new MyPoint(3, 4));
        Assertions.assertEquals(newPoint, c1.getCenter());
        System.out.println("setCenter() method passed: " + c1.getCenter() + "\n");
    }

    @Test // Inherited Getters and Setters Tests
    public void inheritedGettersSettersTest() {
        System.out.println("*Running: inheritedGettersSettersTest()*");

        Assertions.assertEquals(10, c1.getCenterX());
        System.out.println("getCenterX() method passed: " + c1.getCenterX());

        Assertions.assertEquals(10, c1.getCenterY());
        System.out.println("getCenterY() method passed: " + c1.getCenterY());

        c1.setCenterX(8);
        Assertions.assertEquals(8, c1.getCenterX());
        System.out.println("setCenterX() method passed: " + c1.getCenterX());

        c1.setCenterY(9);
        Assertions.assertEquals(9, c1.getCenterY());
        System.out.println("setCenterY() method passed: " + c1.getCenterY());

        c1.setCenterXY(1,2);
        Assertions.assertSame(c1, c1);
        System.out.println("setCenterXY() method passed: " + p1 + "\n");
    }

    @Test // Custom Methods Tests
    public void customMethodsTest() {
        System.out.println("*Running: customMethodsTest()*");

        Assertions.assertNotNull(c2);
        System.out.println("Initial new MyCircle2 instance working: " + c2);

        Assertions.assertEquals(50.24, c2.getArea());
        System.out.println("getArea() method passed: " + c2.getArea());

        String msg;
        Assertions.assertEquals(25.12, c2.getCircumference(), msg = "getCircumference() method passed: " + c2.getCircumference());
        System.out.println(msg);

        double otherCircle = c2.circleDistance(new MyCircle(new MyPoint(3, 5), 3));
        Assertions.assertEquals(5.0, otherCircle);
        System.out.println("circleDistance() from another circle method passed: " + otherCircle + "\n");
    }

    @AfterAll
    public static void after() {
        System.out.println("Total Circles: " + MyCircle.count);
        System.out.println("Tests ended.");
    }

}
