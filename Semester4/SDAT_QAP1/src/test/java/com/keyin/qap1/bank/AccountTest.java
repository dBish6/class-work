package com.keyin.qap1.bank;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.Assertions;

public class AccountTest {

    static User user = new User(1, "Chris Sewyer", 'M', "69 Hummeton Ave", "(609)565-3327");
    static Account acc = new Account(1, user, 14000);

    @BeforeAll
    public static void before() {
        System.out.println("Test(s) start...\n");
    }

    @Test // Basic Getters and Setters Tests
    public void gettersSettersTest() {
        System.out.println("*Running: gettersSettersTest()*");

        Assertions.assertNotNull(acc);
        System.out.println("Initial new user account instance working: " + acc);

        Assertions.assertEquals(1, acc.getId());
        System.out.println("getId() method passed: " + acc.getId());

        Assertions.assertEquals(acc.getUser(), acc.getUser());
        System.out.println("getUser() method passed: " + acc.getUser());

        Assertions.assertEquals(acc.getBalance(), acc.getBalance());
        System.out.println("getBalance() method passed: " + acc.getBalance());

        Assertions.assertEquals("Chris Sewyer", acc.getUserName());
        System.out.println("getUserName() method passed: " + acc.getUserName());

        Assertions.assertEquals("69 Hummeton Ave", acc.getUserAddress());
        System.out.println("getUserAddress() method passed: " + acc.getUserAddress());

        Assertions.assertEquals("(609)565-3327", acc.getUserPhone());
        System.out.println("getUserPhone() method passed: " + acc.getUserPhone());

        Assertions.assertEquals(acc, acc.getAccount(acc));
        System.out.println("getAccount() method passed: " + acc.getAccount(acc));

        acc.setBalance(15000);
        Assertions.assertEquals(15000, acc.getBalance());
        System.out.println("setBalance() method passed: " + acc.getBalance() + "\n");
    }

    @Test // Custom Methods Tests
    public void customMethodsTest() throws InsufficientFundsException {
        System.out.println("*Running: customMethodsTest()*");

        acc.deposit(1000);
        Assertions.assertEquals(15000, acc.getBalance());
        System.out.println("deposit() method passed: (+1000) " + acc.getBalance());
        // deposit()'s exception test.
        Assertions.assertThrows(InsufficientFundsException.class, () -> {
            acc.deposit(-100);
        });
        System.out.println("deposit()'s error exception passed.");

        acc.withdraw(5000);
        Assertions.assertEquals(10000, acc.getBalance());
        System.out.println("withdraw() method passed: (-5000) " + acc.getBalance());
        // withdraw()'s exception test.
        Assertions.assertThrows(InsufficientFundsException.class, () -> {
            acc.withdraw(900000);
        });
        System.out.println("withdraw()'s error exception passed.");

        acc.saveAccount(acc);
        System.out.println("saveAccount() saved the account.");

        Assertions.assertEquals(1, acc.totalSavedAccounts());
        System.out.println("totalSavedAccounts() method passed: " + acc.totalSavedAccounts() + "\n");
    }

    @AfterAll
    public static void after() {
        System.out.println("Tests ended.");
    }
}
