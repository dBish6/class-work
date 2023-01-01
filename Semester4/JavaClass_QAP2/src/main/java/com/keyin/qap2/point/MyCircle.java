package com.keyin.qap2.point;

public class MyCircle {
    // Instance Variables
    private MyPoint center = new MyPoint();
    private int radius = 0;
    static int count = 0;
    static final double PI = 3.14;

    // Constructors
    public MyCircle() {
        // didn't need super here() calls the default instance var anyway.
        super();
        count++;
    }

    public MyCircle(int x, int y, int radius) {
        this.center = new MyPoint(x, y); this.radius = radius;
        count++;
    }

    public MyCircle(MyPoint center, int radius) {
        this.center = center; this.radius = radius;
        count++;
    }

    // Getters and Setters
    public double getRadius() {
        return radius;
    }

    public MyPoint getCenter() {
        return center;
    }

    public void setRadius(int r) {
        this.radius = r;
    }

    public void setCenter(MyPoint center) {
        this.center = center;
    }

    // Getters and setters from MyPoint(aggregated) class.
    public int getCenterX() {
        return this.center.getX();
    }

    public int getCenterY() {
        return this.center.getY();
    }

    public void setCenterX(int x) {
        this.center.setX(x);
    }

    public void setCenterY(int y) {
        this.center.setY(y);
    }

    // Custom Methods
    public void setCenterXY(int x, int y) {
        this.center.setXY(x, y);
    }

    @Override
    public String toString() {
        return "MyCircle[radius=" + this.radius + ", " + "center=" + this.center.toString() + "]";
    }

    public double getArea() {
        return PI * this.radius * this.radius;
    }

    public double getCircumference() {
        return 2 * PI * this.radius;
    }

    // Distance from another circle.
    public double circleDistance(MyCircle fromPoint) {
        return this.center.distance(fromPoint.getCenterX(), fromPoint.getCenterY());
    }
}
