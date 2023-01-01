package com.keyin.qap1;

public class Date {
    // Instance Variables
    private int day = 1;
    private int month = 1;
    private int year = 1969;

    // Constructors
    Date() {
    }
    Date(int day, int month, int year) {
        if (day < 1 || month < 1 || year < 1900) {
            System.err.println("ERROR: Input is invalid.");
        } else {
            this.day = day;
            this.month = month;
            this.year = year;
        }
    }

    // Getters and Setters
    public int getDay() {
        return day;
    }

    public int getMonth() {
        return month;
    }

    public int getYear() {
        return year;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setDate(int day, int month, int year) {
        if (day < 1 || month < 1 || year < 1900) {
            System.err.println("ERROR: Input is invalid.");
        } else {
            this.day = day;
            this.month = month;
            this.year = year;
        }
    }

    public String toString() {
        // If the day and the month is less than 10; add leading zeros.
        if (this.day < 10 && this.month < 10) {
            return "0" + this.day + "/" + "0" + this.month + "/" + this.year;
            // If the day is less than 10; add leading zero.
        } else if (this.day < 10) {
            return "0" + this.day + "/" + this.month + "/" + this.year;
            // If the month is less than 10; add leading zero.
        } else if (this.month < 10) {
            return this.day + "/" + "0" + this.month + "/" + this.year;
        } else {
            // Else all is greater than 10; no leading zero.
            return this.day + "/" + this.month + "/" + this.year;
        }
    }
}
