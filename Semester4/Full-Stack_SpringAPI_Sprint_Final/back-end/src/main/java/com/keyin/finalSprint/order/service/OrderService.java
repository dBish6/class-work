package com.keyin.finalSprint.order.service;

import com.keyin.finalSprint.order_detail.model.OrderDetail;
import com.keyin.finalSprint.order_detail.repository.OrderDetailRepository;
import com.keyin.finalSprint.order.model.Order;
import com.keyin.finalSprint.order.repository.OrderRepository;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private OrderDetailRepository orderDetailsRepo;

    public void savePostRequestToDb(String file){
        try {
            JSONObject order = new JSONObject(file);

            Order thisOrder = createOrdersObject(order);

            // Saving Order Details to Order Table
            orderRepo.save(thisOrder);

            // Creating JSON Array for Order Details
            JSONArray orderDetails = createOrderDetailsJsonArray(order);

            for(int i = 0; i < orderDetails.length(); i++){
                // Getting each item for order
                // Creating an Order Details object and saving to Order Details Table
                OrderDetail orderDetailItem = createOrderDetailsObject(thisOrder, orderDetails, i);

                // Saving Order Details to OrderDetails table
                orderDetailsRepo.save(orderDetailItem);
            }

        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }

    public OrderDetail createOrderDetailsObject(Order thisOrder, JSONArray orderDetails, int i) throws JSONException {
        // Creates the OrderDetails Object and Returns
        OrderDetail orderDetailItem = new OrderDetail();

        orderDetailItem.setQuantity((Integer) orderDetails.getJSONObject(i).get("quantity"));
        orderDetailItem.setSword_id((Integer) orderDetails.getJSONObject(i).get("sword_id"));
        orderDetailItem.setSword_name((String) orderDetails.getJSONObject(i).get("name"));
        orderDetailItem.setUnit_price((Double) orderDetails.getJSONObject(i).get("price"));
        orderDetailItem.setOrders(thisOrder);
        return orderDetailItem;
    }

    public JSONArray createOrderDetailsJsonArray(JSONObject order) throws JSONException {
        // Creates & Returns orderDetails JSONArray
        JSONArray orderDetails = (JSONArray) order.get("cartItems");
        return orderDetails;
    }

    public Order createOrdersObject(JSONObject order) throws JSONException {
        // Creating the Orders Object for this order
        Order thisOrder = new Order();

        thisOrder.setTax_rate((Double) order.get("tax_rate"));
        thisOrder.setOrder_subtotal((Double) order.get("order_subtotal"));
        thisOrder.setOrder_total((Double) order.get("order_total"));
        thisOrder.setUsername(order.getString("username"));
        return thisOrder;
    }

}
