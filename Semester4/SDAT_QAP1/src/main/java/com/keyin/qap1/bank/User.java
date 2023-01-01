package com.keyin.qap1.bank;

public class User {
    // Instance Variables
    private int ID = 1;
    private String name = "";
    private char gender;
    private String address = "";
    private String phone = "";

    // Constructors
    User(int ID, String name) {
        this.ID = ID;
        this.name = name;
    }

    User(int ID, String name, char gender, String address, String phone) {
        this.ID = ID;
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
    }

    // Getters and Setters
    public int getID() {
        return ID;
    }

    public String getName() {
        return name;
    }

    public char getGender() {
        return gender;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    // Custom Methods
    public String toString() {
        return this.name + "(" + this.ID + ")";
    }
}
