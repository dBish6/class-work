package com.keyin.qap2.creditCardUser;

public class Money {
    // Instance Variables
    private long dollars;
    private long cents;

    // Constructors
    public Money(double amount) {
        String s = Double.toString(amount);
        String[] sArr = s.split("\\.");

        int subStr1 = Integer.parseInt(sArr[0]);
        int subStr2 = Integer.parseInt(sArr[1]);
        this.dollars = subStr1; this.cents = subStr2;
    }

    // Copy Constructor
    public Money(Money object) {
        this.dollars = object.dollars;
        this.cents = object.cents;
    }

    // Custom Methods
    public Money add(Money amount) {
        this.dollars += amount.dollars;
        this.cents += amount.cents;
        return new Money(this);
    }

    public Money subtract(Money amount) {
        this.dollars -= amount.dollars;
        this.cents -= amount.cents;
        return new Money(this);
    }

    public static int compare (long x, long y) {
        return (x < y) ? -1 : ((x == y) ? 0 : 1);
    }

    public int compareTo(Money object) {
        return compare(this.dollars + this.cents, object.dollars + object.cents);
    }

    @Override
    public boolean equals(Object object) {
        if (this == object)
            return true;
        if (object == null || getClass() != object.getClass())
            return false;
        Money money = (Money) object;
        return dollars == money.dollars && cents == money.cents;
    }

    @Override
    public String toString() {
        return "$" + this.dollars + "." + this.cents;
    }
}
