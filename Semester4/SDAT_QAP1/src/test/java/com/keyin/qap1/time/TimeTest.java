package com.keyin.qap1.time;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.Assertions;

public class TimeTest {

    static Time t = new Time();

    @BeforeAll
    public static void before() {
        System.out.println("Test(s) start...\n");
    }

    @Test // Basic Getters and Setters Tests
    public void gettersSettersTest() throws InvalidTimeException {
        System.out.println("*Running: gettersSettersTest()*");

        Assertions.assertNotNull(t);
        System.out.println("Initial new time instance working: " + t);

        t.setTime(21, 10, 15);
        Assertions.assertSame(t, t);
        System.out.println("SetTime() method passed: " + t);
        // setTime()'s exception test.
        Assertions.assertThrows(InvalidTimeException.class, () -> {
            t.setTime(24, 60, 6);
        });
        System.out.println("setTime()'s error exception passed.");

        Assertions.assertEquals(21, t.getHour());
        System.out.println("getHour() method passed: " + t.getHour());

        Assertions.assertEquals(10, t.getMinute());
        System.out.println("getMinute() method passed: " + t.getMinute());

        Assertions.assertEquals(15, t.getSecond());
        System.out.println("getSecond() method passed: " + t.getSecond());

        t.setHour(6);
        Assertions.assertEquals(6, t.getHour());
        System.out.println("setHour() method passed: " + t.getHour());
        // setHour()'s exception test.
        Assertions.assertThrows(InvalidTimeException.class, () -> {
            t.setHour(25);
        });
        System.out.println("setHour()'s error exception passed.");

        t.setMinute(60);
        Assertions.assertEquals(0, t.getMinute());
        System.out.println("setMinute() method passed: " + t.getMinute());
        // setMinute()'s exception test.
        Assertions.assertThrows(InvalidTimeException.class, () -> {
            t.setHour(24);
            t.setMinute(60);
        });
        System.out.println("setMinute()'s error exception passed.");

        t.setSecond(60);
        Assertions.assertEquals(0, t.getSecond());
        System.out.println("setSecond() method passed: " + t.getSecond());
        // setSecond()'s exception test.
        Assertions.assertThrows(InvalidTimeException.class, () -> {
            t.setSecond(61);
        });
        System.out.println("setSecond()'s error exception passed.\n" );
    }


    @Test // Custom Methods Tests
    public void customMethodsTest() throws InvalidTimeException {
        System.out.println("*Running: customMethodsTest()*");

        Assertions.assertNotNull(t);
        System.out.println("Initial new time instance working: " + t);

        t.setTime(21, 10, 15);
        System.out.println("Initial time: " + t);

        t.nextSecond();
        System.out.println("nextSecond() method passed: " + t.getSecond());

        t.previousSecond();
        System.out.println("previousSecond() method passed: " + t.getSecond() + "\n");
    }

    @AfterAll
    public static void after() {
        System.out.println("Tests ended.");
    }
}
