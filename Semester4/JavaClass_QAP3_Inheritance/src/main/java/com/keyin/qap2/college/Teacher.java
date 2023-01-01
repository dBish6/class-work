package com.keyin.qap2.college;

import com.keyin.qap2.college.exceptions.InvalidInputException;

import java.util.Objects;

public class Teacher extends Person {
    // Instance Variables
    private String subject;
    private double salary;
    protected static final String[] currentSubjects = {"Computer Science", "Chemistry", "English", "Other"};

    // Constructors
    public Teacher(String name, int age, char gender, String subject, double salary) throws InvalidInputException {
        super(name, age, gender);
        boolean found = false;
        for (int i = 0; i < currentSubjects.length; i++) {
            if (Objects.equals(subject, currentSubjects[i])) {
                this.subject = subject; this.salary = salary;
                found = true;
                break;
            }
        }
        if (!found) {
            throw new InvalidInputException("ERROR: Parameter subject doesn't match the current list of subjects.\n" +
                    "CurrentSubjects: (Computer Science, Chemistry, English, Other)");
        }
    }

    // Getters and Setters
    // Abstract Methods...
    @Override
    public String getName() {
        return super.name;
    }
    @Override
    public int getAge() {
        return super.age;
    }
    @Override
    public char getGender() {
        return super.gender;
    }
    @Override
    public void setName(String name) {
        super.name = name;
    }
    @Override
    public void setAge(int age) {
        super.age = age;
    }
    @Override
    public void setGender(char gender) {
        super.gender = gender;
    }

    // For this class...
    public String getSubject() {
        return subject;
    }

    public double getSalary() {
        return salary;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    // Custom Methods
    // Abstract Method
    @Override
    public String toString() {
        return this.name + ": Age= " + this.age + ", Gender= " + this.gender + ", Position= Teacher, Subject= "
                + this.subject + ", Salary= " + this.salary;
    }
}
