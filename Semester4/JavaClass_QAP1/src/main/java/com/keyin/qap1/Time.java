package com.keyin.qap1;

public class Time {
    // Instance Variables
    private int hour = 0;
    private int minute = 0;
    private int second = 0;

    // Constructors
    Time() {
    }

    Time(int hour, int minute, int second) {
        if (second > 60 || second < -1) {
            System.err.println("ERROR: Input " + second + " is invalid.");
        } else {
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }
    }

    // Getters and Setters
    public int getHour() {
        return hour;
    }

    public int getMinute() {
        return minute;
    }

    public int getSecond() {
        return second;
    }

    public void setHour(int hour) {
        if (hour > 23 || hour <= -1 ) {
            System.err.println("ERROR: Input " + hour + " is invalid.");
        } else this.hour = hour;
    }

    public void setMinute(int minute) {
        if (minute > 60 || minute <= -1) {
            System.err.println("ERROR: Input " + minute + " is invalid.");
        } else this.minute = minute;
    }

    public void setSecond(int second) {
        if (second > 60 || second < -1) {
            System.err.println("ERROR: Input " + second + " is invalid.");
        } else if (second == 60) {
            this.second = 0;
            setMinute(getMinute() + 1);
        } else if (second == -1){
            this.second = 59;
            setMinute(getMinute() - 1);
        } else this.second = second;
    }

    public void setTime(int hour, int minute, int second) {
        if (second > 60 || second < -1) {
            System.err.println("ERROR: Input " + second + " is invalid.");
        } else {
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }
    }

    public String toString() {
        // If the hour, the minute and the hour are less than 10; add leading zeros.
        if (this.hour < 10 && this.minute < 10 && this.second < 10) {
            return "0" + this.hour + ":" + "0" + this.minute + ":" + "0" + this.second;

            // If the hour and the minute are less than 10; add leading zeros.
        } else if (this.hour < 10 && this.minute < 10) {
            return "0" + this.hour + ":" + "0" + this.minute + ":" + this.second;

            // If the hour and the second is less than 10; add leading zeros.
        } else if (this.hour < 10 && this.second < 10) {
            return "0" + this.hour + ":" + this.minute + ":" + "0" + this.second;

            // If the minute and the second is less than 10; add leading zeros.
        } else if (this.minute < 10 && this.second < 10) {
            return this.hour + ":" + "0" + this.minute + ":" + "0" + this.second;

            // If the hour is less than 10; add leading zero.
        } else if (this.hour < 10) {
            return "0" + this.hour + ":" + this.minute + ":" + this.second;

            // If the minute is less than 10; add leading zero.
        } else if (this.minute < 10) {
            return this.hour + ":" + "0" + this.minute + ":" + this.second;

            // If the second is less than 10; add leading zero.
        } else if (this.second < 10) {
            return this.hour + ":" + this.minute + ":" + "0" + this.second;

        } else {
            // Else all is greater than 10; no leading zero.
            return this.hour + ":" + this.minute + ":" + this.second;
        }
    }

    public Time nextSecond() {
        if (this.second > 60) {
            System.err.println("ERROR: " + this.second + ", " + "exceeds 60 seconds.");
        } else if (second == 60) {
            this.second = 0;
            setMinute(getMinute() + 1);
        } else this.second += 1;

        return new Time(this.hour, this.minute, this.second);
    }

    public Time previousSecond() {
        if (this.second < 0) {
            System.err.println("ERROR: " + this.second + ", " + "seconds is now negative.");
        } else if (this.second == 0) {
            this.second = 59;
            setMinute(getMinute() - 1);
        } else this.second -= 1;

        return new Time(this.hour, this.minute, this.second);
    }
}
