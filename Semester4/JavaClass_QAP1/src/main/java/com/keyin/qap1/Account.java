package com.keyin.qap1;

public class Account {
    // Instance Variables
    private String id = "";
    private String name = "";
    private int balance = 0;
    protected static int accCount = 0;

    // Constructors
    Account(String id, String name) {
        this.id = id;
        this.name = name;
        accCount++;
    }

    Account(String id, String name, int balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        accCount++;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getBalance() {
        return balance;
    }

    public int credit(int amount) {
        return this.balance = amount + this.balance;
    }

    public int debit(int amount) {
        if (amount <= this.balance) {
            return this.balance = amount - this.balance;
        } else {
            System.err.println("Amount exceeded balance.");
            return this.balance;
        }
    }

    public int transferTo(Account account, int amount) {
        if (amount <= this.balance) {
            // Adds to the other account.
            account.balance = this.balance + amount;
            // Subtract from initial account.
            this.balance = this.balance - amount;
            return account.balance;
        } else {
            System.err.println("Amount exceeded balance.");
            return this.balance;
        }
    }

    public String toString() {
        return "Account Details: " + "id = " + this.id + ", " + "name= "
                + this.name + ", " + "balance= $" + this.balance;
    }
}
