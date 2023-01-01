package com.keyin.qap2.college;

import com.keyin.qap2.college.exceptions.InvalidInputException;

public class Student extends Person {
    // Instance Variables
    private int idNum;
    private double GPA; // Grade point average.

    // Constructors
    public Student(String name, int age, char gender, int idNum, double GPA) throws InvalidInputException {
        super(name, age, gender);
        if (GPA > 5.0) {
            throw new InvalidInputException("ERROR: Invalid input.");
        }
        this.idNum = idNum; this.GPA = GPA;
    }

    // Random Copy Constructor
    public Student(Student studentObj) {
        super(studentObj.name, studentObj.age, studentObj.gender);
        this.idNum = studentObj.idNum;
        this.GPA = studentObj.GPA;
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
    public int getIdNum() {
        return idNum;
    }

    public double getGPA() {
        return GPA;
    }

    public void setIdNum(int idNum) {
        this.idNum = idNum;
    }

    public void setGPA(double GPA) {
        this.GPA = GPA;
    }

    // Custom Methods
    // Abstract Method
    @Override
    public String toString() {
        return this.name + ": Age= " + this.age + ", Gender= " + this.gender + ", Position= Student, idNum= "
                + this.idNum + ", GPA= " + this.GPA;
    }
}
