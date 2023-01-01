package com.keyin.finalSprint.order.service;

import com.keyin.finalSprint.order_detail.model.OrderDetail;
import com.keyin.finalSprint.order.model.Order;
import com.keyin.finalSprint.order.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {

    @InjectMocks
    OrderService orderService;

    @Mock
    OrderRepository ordersRepo;

//    @BeforeAll
//    public void init(){
//        MockitoAnnotations.openMocks(this);
//    }

    @Test
    public void saveOrderToDb() {
        // String for Method
        String inputString = "{\n" +
                "    \"tax_rate\": 0,\n" +
                "    \"order_subtotal\": 349.97,\n" +
                "    \"order_total\": 349.97,\n" +
                "        \"order_details\": \n" +
                "    [\n" +
                "    {\n" +
                "        \"sword_id\": 6,\n" +
                "        \"sword_name\": Seax,\n" +
                "        \"unit_price\": 99.99,\n" +
                "        \"quantity\": 2\n" +
                "    },\n" +
                "    {\n" +
                "        \"sword_id\": 9,\n" +
                "        \"sword_id\": Masonic,\n" +
                "        \"unit_price\": 149.99,\n" +
                "        \"quantity\": 1\n" +
                "    }\n" +
                "    ]\n" +
                "}";

        Order testOrder = new Order(0, 349.97, 349.97, "DavidTest");
        OrderDetail item1 = new OrderDetail(6, 99.99, 2, "Seax", testOrder );
        OrderDetail item2 = new OrderDetail(9, 149.99, 1, "Masonic", testOrder);



    }
}
