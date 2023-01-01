package com.keyin.qap2.point;

public class MyPoint {
    // Instance Variables
    private int x = 0;
    private int y = 0;

    // Constructors
    public MyPoint() {
        // didn't need super here() calls the default instance var anyway.
        super();
    }

    public MyPoint(int x, int y) {
        this.x = x; this.y = y;
    }

    // Getters and Setters
    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    public void setXY(int x, int y) {
        this.x = x; this.y = y;
    }

    // Custom Methods
    @Override
    public String toString() {
        return "(" + this.x + ", " + this.y + ")";
    }

    public double distance() {
        int disX = this.x;
        int disY = this.y;
        return Math.sqrt(disX * disX + disY * disY);
    }

    public double distance(int x, int y) {
        if (this.x > x && this.y > y) {
            int disX = this.x - x;
            int disY = this.y - y;
            return Math.sqrt(disX * disX + disY * disY);
        } else if (this.x > x && this.y < y){
            int disX = this.x - x;
            int disY = y - this.y;
            return Math.sqrt(disX * disX + disY * disY);
        } else if (this.y > y && this.x < x) {
            int disX = x - this.x;
            int disY = this.y - y;
            return Math.sqrt(disX * disX + disY * disY);
        } else {
            int disX = x - this.x;
            int disY = y - this.y;
            return Math.sqrt(disX * disX + disY * disY);
        }
    }

    public double distance(MyPoint myPoint) {
        if (this.x > myPoint.x && this.y > myPoint.y) {
            int disX = this.x - myPoint.x;
            int disY = this.y - myPoint.y;
            return Math.sqrt(disX * disX + disY * disY);
        } else if (this.x > myPoint.x && this.y < myPoint.y){
            int disX = this.x - myPoint.x;
            int disY = myPoint.y - this.y;
            return Math.sqrt(disX * disX + disY * disY);
        } else if (this.y > myPoint.y && this.x < myPoint.x) {
            int disX = myPoint.x - this.x;
            int disY = this.y - myPoint.y;
            return Math.sqrt(disX * disX + disY * disY);
        } else {
            int disX = myPoint.x - this.x;
            int disY = myPoint.y - this.y;
            return Math.sqrt(disX * disX + disY * disY);
        }
    }
}
