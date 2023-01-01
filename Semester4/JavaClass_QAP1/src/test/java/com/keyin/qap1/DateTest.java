package com.keyin.qap1;

public class DateTest {

    public static void main(String[] args) {
        // Another way to use this class!
        Date d = new Date();

        d.setDate(10, 7, 1969);
        System.out.println(d + "\n");

        // New instances of Date class.
        Date d1 = new Date(1, 2, 1986);
        Date d2 = new Date(5, 9, 2002);
        Date d3 = new Date(31, 10, 2010);
        // Just to show the error clause.
        Date d4 = new Date(0, 10, 2010);

        // Date in specified format.
        System.out.println(d1.toString());
        System.out.println(d2.toString());
        System.out.println(d3.toString());
    }
}
