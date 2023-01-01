package com.keyin.qap1.time;

public class Time {
    // Instance Variables
    private int hour = 0;
    private int minute = 0;
    private int second = 0;

    // Constructors
    Time() {
    }

    Time(int hour, int minute, int second) throws InvalidTimeException {
        if (second > 60 || second <= -1 || minute > 60 || minute <= -1 || hour > 24 || hour <= -1) {
            throw new InvalidTimeException("ERROR: Input is invalid.");
        } else if (minute == 60) {
            // The check before plus one hour because we don't want 25 hours.
            int check = hour + 1;
            if (check > 24) {
                throw new InvalidTimeException("ERROR: Hour is greater then 24 hours.");
            } else {
                // If minute is 60 and second is 60.
                if (second == 60) {
                    this.hour = hour + 1;
                    this.minute = 1;
                    this.second = 0;
                // Else plus the hour because 60 equals one hour.
                } else {
                    this.hour = hour + 1;
                    this.minute = 0;
                    this.second = second;
                }
            }
        } else if (hour == 24) {
            this.hour = hour;
            this.minute = 0;
            this.second = 0;
        } else if (second == 60) {
            this.hour = hour;
            this.minute = minute + 1;
            this.second = 0;
        } else {
            this.hour = hour; this.minute = minute; this.second = second;
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

    public void setHour(int hour) throws InvalidTimeException {
        if (hour > 24 || hour <= -1 ) {
            throw new InvalidTimeException("ERROR: Input " + hour + " is invalid.");
        } else if (hour == 24) {
            this.minute = 0;
            this.second = 0;
        }
        this.hour = hour;
    }

    public void setMinute(int minute) throws InvalidTimeException {
        if (minute > 60 || minute <= -1) {
            throw new InvalidTimeException("ERROR: Input " + minute + " is invalid.");

        } else if (minute == 60){
            if (getHour() + 1 > 24) {
                throw new InvalidTimeException("ERROR: Hour is greater then 24 hours.");
            } else {
                this.hour = getHour() + 1;
                this.minute = 0;
            }
        } else this.minute = minute;
    }

    public void setSecond(int second) throws InvalidTimeException {
        if (second > 60 || second <= -1) {
            throw new InvalidTimeException("ERROR: Input " + second + " is invalid.");
        } else if (second == 60){
            if (getMinute() + 1 > 60) {
                throw new InvalidTimeException("ERROR: Minute is greater then 60 minutes.");
            } else {
                this.minute = getMinute() + 1;
                this.second = 0;
            }
        } else this.second = second;
    }

    public void setTime(int hour, int minute, int second) throws InvalidTimeException {
        if (second > 60 || second <= -1 || minute > 60 || minute <= -1 || hour > 24 || hour <= -1 ) {
            throw new InvalidTimeException("ERROR: Input is invalid.");
        } else if (minute == 60) {
            int check = hour + 1;
            if (check > 24) {
                throw new InvalidTimeException("ERROR: Hour is greater then 24 hours.");
            } else {
                if (second == 60) {
                    this.hour = hour + 1;
                    this.minute = 1;
                    this.second = 0;
                } else {
                    this.hour = hour + 1;
                    this.minute = 0;
                    this.second = second;
                }
            }
        } else if (hour == 24) {
            this.hour = hour;
            this.minute = 0;
            this.second = 0;
        } else if (second == 60){
            this.hour = hour;
            this.minute = minute + 1;
            this.second = 0;
        } else {
            this.hour = hour; this.minute = minute; this.second = second;
        }
    }

    // Custom Methods
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

    public Time nextSecond() throws InvalidTimeException {
        if (second == 60) {
            this.second = 0;
            setMinute(getMinute() + 1);
        } else this.second += 1;

        return new Time(this.hour, this.minute, this.second);
    }

    public Time previousSecond() throws InvalidTimeException {
        if (this.second == 0) {
            this.second = 59;
            setMinute(getMinute() - 1);
        } else this.second -= 1;

        return new Time(this.hour, this.minute, this.second);
    }
}
