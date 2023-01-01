package com.keyin.qap1.bank;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

public class UserTest {

    static User user = new User(1, "Chris Sewyer", 'M', "69 Hummeton Ave", "(609)565-3327");

    @BeforeAll
    public static void before() {
        System.out.println("Test(s) start...\n");
    }

    @Test // Basic Getters and Setters Tests
    public void gettersSettersTest() {
        System.out.println("*Running: gettersSettersTest()*");

        Assertions.assertNotNull(user);
        System.out.println("Initial new user instance working: " + user);

        Assertions.assertEquals(1, user.getID());
        System.out.println("getId() method passed: " + user.getID());

        Assertions.assertEquals('M', user.getGender());
        System.out.println("getGender() method passed: " + user.getGender());

        Assertions.assertEquals("69 Hummeton Ave", user.getAddress());
        System.out.println("getAddress() method passed: " + user.getAddress());

        Assertions.assertEquals("(609)565-3327", user.getPhone());
        System.out.println("getPhone() method passed: " + user.getPhone() + "\n");
    }

    @AfterAll
    public static void after() {
        System.out.println("Tests ended.");
    }
}
