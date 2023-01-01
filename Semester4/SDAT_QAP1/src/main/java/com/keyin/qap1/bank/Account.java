package com.keyin.qap1.bank;

import java.util.HashMap;

public class Account {
    // Instance Variables
    private int id = 1;
    private User user;
    private double balance = 0;

    private HashMap<Integer, Account> accounts = new HashMap<Integer, Account>(); // Generics; makes a map to store, like a list.

    // Constructors
    Account(int id, User user) {
        this.id = id; this.user = user;
    }

    Account(int id, User user, double balance) {
        this.id = id; this.user = user; this.balance = balance;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public double getBalance() {
        return balance;
    }

    public String getUserName() {
        return this.user.getName();
    }

    public String getUserAddress() {
        return this.user.getAddress();
    }

    public String getUserPhone() {
        return this.user.getPhone();
    }

    // I've done it this way instead of using accounts.get because if the account is not saved you can still get the account.
    public Account getAccount(Account account) {
        return account;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

//    public Account getAccount(int id) {
//        return accounts.get(id);
//    }

    // Custom Methods
    public String toString() {
        return this.user.toString() + " balance= $" + this.balance;
    }

    public Account deposit(double amount) throws InsufficientFundsException {
        if (amount < 0) {
            throw new InsufficientFundsException("ERROR: Insufficient funds.");
        } else this.balance += amount;

        return new Account(this.id, this.user, this.balance);
    }

    public Account withdraw(double amount) throws InsufficientFundsException {
        if (amount > this.balance || amount < 0) {
            throw new InsufficientFundsException("ERROR: Insufficient funds.");
        } else this.balance -= amount;

        return new Account(this.id, this.user, this.balance);
    }

    public void saveAccount(Account account) {
        // HashMap; uses key value pair.
        accounts.put(account.getId(), account);
    }

    public int totalSavedAccounts() {
       return accounts.values().size();
    }
}
