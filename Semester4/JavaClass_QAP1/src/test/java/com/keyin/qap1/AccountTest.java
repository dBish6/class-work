package com.keyin.qap1;

public class AccountTest {

    public static void main(String[] args) {

        // New instances of Account class.
        Account Acc1 = new Account("A1FRHG3", "Chris Sawyer", 5000);
        Account Acc2 = new Account("A1HJKF6", "Dave Bish", 4000);

        // Account balances before transfer; getBalance().
        System.out.println("Chris's initial balance: $" + Acc1.getBalance());
        System.out.println("Dave's initial balance: $" + Acc2.getBalance() + "\n");

        // Transfer to Acc2.
        Acc1.transferTo(Acc2, 1000);

        // Account balances after transfer; getBalance().
        System.out.println("Chris's current balance: $" + Acc1.getBalance());
        System.out.println("Dave's current balance: $" + Acc2.getBalance() + "\n");

        // Account Details
        System.out.println("1st " + Acc1.toString());
        System.out.println("2nd " + Acc2.toString() + "\n");

        System.out.println("Total accounts: " + Account.accCount);
    }
}
