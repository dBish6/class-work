package com.keyin.finalSprint.order.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class OrdersTest {

    @Test
    public void ordersConstructorTest1(){

        long orderId = 45;
        int taxRate = 15;
        double orderSubtotal = 100.00;
        double orderTotal = 115.00;
        String username = "DavidTest";

        // Test 1 Constructor - With order_id
        Order testOrder1 = new Order(orderId, taxRate, orderSubtotal, orderTotal, username);

        Assertions.assertEquals(orderId, testOrder1.getOrder_id());
        Assertions.assertEquals(taxRate, testOrder1.getTax_rate());
        Assertions.assertEquals(orderSubtotal, testOrder1.getOrder_subtotal());
        Assertions.assertEquals(orderTotal, testOrder1.getOrder_total());
        Assertions.assertNotEquals(50L, testOrder1.getOrder_id());
        Assertions.assertNotEquals(10, testOrder1.getTax_rate());
        Assertions.assertNotEquals(125.75, testOrder1.getOrder_subtotal());
        Assertions.assertNotEquals(143.99, testOrder1.getOrder_total());

    }

    @Test
    public void ordersConstructorTest2(){
        // Test 2 Constructor - Without order_id
        int taxRate = 5;
        double orderSubtotal = 500.00;
        double orderTotal = 525.00;
        String username = "DavidTest";

        Order testOrder2 = new Order(taxRate, orderSubtotal, orderTotal, username);

        Assertions.assertEquals(taxRate, testOrder2.getTax_rate());
        Assertions.assertEquals(orderSubtotal, testOrder2.getOrder_subtotal());
        Assertions.assertEquals(orderTotal, testOrder2.getOrder_total());
        Assertions.assertNotEquals(10, testOrder2.getTax_rate());
        Assertions.assertNotEquals(125.75, testOrder2.getOrder_subtotal());
        Assertions.assertNotEquals(143.99, testOrder2.getOrder_total());

    }

    @Test
    public void ordersSettersTest1(){
        // Test 3 - Testing the Setters
        long orderId = 50;
        int taxRate = 15;
        double orderSubtotal = 100.00;
        double orderTotal = 115.00;
        String username = "DavidTest";

        Order testOrder3 = new Order();

        // Result before Setters are used
        Assertions.assertNotEquals(orderId, testOrder3.getOrder_id());
        Assertions.assertNotEquals(taxRate, testOrder3.getTax_rate());
        Assertions.assertNotEquals(orderSubtotal, testOrder3.getOrder_subtotal());
        Assertions.assertNotEquals(orderTotal, testOrder3.getOrder_total());

        // Changing values with Setters
        testOrder3.setOrder_id(orderId);
        testOrder3.setTax_rate(taxRate);
        testOrder3.setOrder_subtotal(orderSubtotal);
        testOrder3.setOrder_total(orderTotal);

        // Results after the Setters are used
        Assertions.assertEquals(orderId, testOrder3.getOrder_id());
        Assertions.assertEquals(taxRate, testOrder3.getTax_rate());
        Assertions.assertEquals(orderSubtotal, testOrder3.getOrder_subtotal());
        Assertions.assertEquals(orderTotal, testOrder3.getOrder_total());
    }
}
