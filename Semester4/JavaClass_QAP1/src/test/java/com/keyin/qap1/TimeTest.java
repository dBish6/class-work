package com.keyin.qap1;

public class TimeTest {

    public static void main(String[] args) {
        // Another way to use this class!
        Time t = new Time();

        t.setTime(6, 35, 50);
        System.out.println("Initial time: " + t);
        t.setSecond(-1);
        System.out.println("Time after setSecond(): " + t + "\n");

        // New instances of Date class.
        Time t1 = new Time(21, 10, 15);
        Time t2 = new Time(10, 20, 25);

        // Time displayed in specified format.
        System.out.println(t1.toString());
        System.out.println(t2.toString() + "\n");

        // Next second and previous second displayed in specified format.
        System.out.println(t1.nextSecond());
        System.out.println(t2.previousSecond());
    }
}
