package com.keyin.qap2.college;

import com.keyin.qap2.college.exceptions.InvalidInputException;

import java.util.Objects;

public class CollegeStudent extends Student {
    // Instance Variables
    private String major;
    private int year;

    // Constructors
    public CollegeStudent(String name, int age, char gender, int idNum, double GPA, String major,
                          int year) throws InvalidInputException
    {
        super(name, age, gender, idNum, GPA);
        boolean found = false;
        for (int i = 0; i < Teacher.currentSubjects.length; i++) {
            if (Objects.equals(major, Teacher.currentSubjects[i])) {
                this.major = major; this.year = year;
                found = true;
                break;
            }
        }
        if (!found) {
            throw new InvalidInputException("ERROR: Parameter major doesn't match the current list of subjects.\n" +
                    "CurrentSubjects: (Computer Science, Chemistry, English, Other)");
        }
    }

    public CollegeStudent(Student studentObj, String major, int year) {
        super(studentObj);
        this.major = major; this.year = year;
    }

    // Getters and Setters
    public int getYear() {
        return year;
    }

    public String getMajor() {
        return major;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    // Custom Methods
    @Override
    public String toString() {
        return super.toString() + ", Major= " + this.major + ", Year= " + this.year;
    }
}
