package com.keyin.qap2.creditCardUser;

import com.keyin.qap2.creditCardUser.exceptions.ExceedLimitException;

public class CreditCardDemo {

    public static void main (String[] args) throws ExceedLimitException {

        final Money creditLimit = new Money(1000);
        final Money balance = new Money(25000);

        Address address = new Address("49 Shearstown Rd", "Bay Roberts", "NL", "A0A1G0");
        Person owner = new Person("Dave", "Bish", address);
        CreditCard visa = new CreditCard(owner, balance, creditLimit);

        System.out.println(visa.getPersonals());
        System.out.println("Balance: " + visa.getBalance());
        System.out.println("Credit Limit: " + visa.getCreditLimit() + "\n");

        System.out.println("compareTo output: " + new Money(20000).compareTo(creditLimit));
        System.out.println("equals output: " + new Money(25000).equals(balance) + "\n");

        System.out.println("Attempt to charge: +$200");
        visa.charge(new Money(200));
        System.out.println("Balance: " + visa.getBalance() + "\n");

        System.out.println("Attempt to charge: +$990");
        visa.charge(new Money(990));
        System.out.println("Balance: " + visa.getBalance() + "\n");

        // To view the exception if you want to.
//        System.out.println("Attempt to charge: +$1001");
//        visa.charge(new Money(1001));
//        System.out.println("Balance: " + visa.getBalance() + "\n");

        System.out.println("Attempted payment: -$1000");
        visa.payment(new Money(1000));
        System.out.println("Balance: " + visa.getBalance() + "\n");
    }
}
