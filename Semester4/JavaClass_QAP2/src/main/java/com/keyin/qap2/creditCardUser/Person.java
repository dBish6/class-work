package com.keyin.qap2.creditCardUser;

public class Person {
    // Instance Variables
    private final String firstName;
    private final String lastName;
    private final Address home;

    // Constructor
    public Person(String firstName, String lastName, Address home) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.home = home;
    }

    // Custom Methods
    @Override
    public String toString() {
        return "name= " + this.firstName + " " + this.lastName + ", address= " + this.home;
    }
}
