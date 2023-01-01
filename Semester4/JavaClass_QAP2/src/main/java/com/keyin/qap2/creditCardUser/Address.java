package com.keyin.qap2.creditCardUser;

public class Address {
    // Instance Variables
    private final String street;
    private final String city;
    private final String provinceOrTerritory;
    private final String postalCode;

    // Constructor
    public Address(String street, String city, String provOrTerr, String postalCode) {
        this.street = street; this.city = city;
        this.provinceOrTerritory = provOrTerr; this.postalCode = postalCode;
    }

    // Custom Methods
    @Override
    public String toString() {
        return this.street + ", " + this.city + " " + this.provinceOrTerritory + ", " + this.postalCode;
    }
}
