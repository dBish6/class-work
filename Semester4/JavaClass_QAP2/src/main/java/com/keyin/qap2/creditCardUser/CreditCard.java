package com.keyin.qap2.creditCardUser;

import com.keyin.qap2.creditCardUser.exceptions.ExceedLimitException;

public class CreditCard {
    // Instance Variables
    private Money balance;
    private Money creditLimit;
    private final Person owner;

    // Constructor
    public CreditCard(Person newCardHolder, Money balance, Money creditLimit) {
        this.owner = newCardHolder;
        this.balance = balance;
        this.creditLimit = creditLimit;
    }

    // Getters and Setters
    public Money getBalance() {
        return balance;
    }

    public Money getCreditLimit() {
        return creditLimit;
    }

    public String getPersonals() {
        return owner.toString();
    }

    // Custom Methods
    public void charge(Money amount) throws ExceedLimitException {
        int compare = amount.compareTo(creditLimit);

        if (compare > 0) {
            throw new ExceedLimitException("ERROR: Specified amount exceeds credit limit.");
        } else balance.add(amount);
    }

    public void payment(Money amount) throws ExceedLimitException {
        int compare = amount.compareTo(balance);

        if (compare > 0) {
            throw new ExceedLimitException("ERROR: Insufficient funds.");
        } else balance.subtract(amount);
    }
}
