package com.keyin.finalSprint.sword.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SwordTest {

    @Test
    public void swordConstructorTest(){

        String expectedName = "Excalibur";
        String expectedType = "Long Sword";
        double expectedLength = 49.5;
        double expectedMass = 12.5;
        double expectedPrice = 129.99;
        String expectedDescription = "This sword was wielded by King Arthur himself";
        String expectedImageUrl = "http://www.someWebsite.com";

        Sword testSword = new Sword(expectedName,expectedType,expectedLength,expectedMass,expectedPrice,expectedDescription,expectedImageUrl);

        Assertions.assertEquals(expectedName,testSword.getName());
        Assertions.assertEquals(expectedType,testSword.getType());
        Assertions.assertEquals(expectedMass,testSword.getMass());
        Assertions.assertEquals(expectedLength,testSword.getLength());
        Assertions.assertEquals(expectedPrice,testSword.getPrice());
        Assertions.assertEquals(expectedDescription,testSword.getDescription());
        Assertions.assertEquals(expectedImageUrl,testSword.getImage_url());

    }

}
