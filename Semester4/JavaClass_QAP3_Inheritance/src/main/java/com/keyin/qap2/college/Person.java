package com.keyin.qap2.college;

public abstract class Person {
    // Instance Variables
    protected String name;
    protected int age;
    protected char gender;

    // Constructor
    public Person (String name, int age, char gender) {
        this.name = name; this.age = age; this.gender = gender;
    }

    // Abstract Methods; to be defined in child classes.
    public abstract String getName();
    public abstract int getAge();
    public abstract char getGender();
    public abstract void setName(String name);
    public abstract void setAge(int age);
    public abstract void setGender(char gender);
    @Override
    public abstract String toString();
}
