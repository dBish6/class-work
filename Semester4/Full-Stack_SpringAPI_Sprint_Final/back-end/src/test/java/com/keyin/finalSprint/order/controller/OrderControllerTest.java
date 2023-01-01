package com.keyin.finalSprint.order.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.keyin.finalSprint.order.model.Order;
import com.keyin.finalSprint.order.service.OrderService;
import com.keyin.finalSprint.order_detail.model.OrderDetail;
import com.keyin.finalSprint.order_detail.repository.OrderDetailRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class OrderControllerTest {

    private MockMvc mockMvc;

    ObjectMapper objectMapper = new ObjectMapper();
    ObjectWriter objectWriter = objectMapper.writer();

    @Mock
    OrderDetailRepository orderDetailRepo;

    @Mock
    OrderService OS;

    @InjectMocks
    OrderController orderController;

    Order order1 = new Order(1l,.15,129.99,"userTest");
    Order order2 = new Order(2l,.15,100.00,"userTestest");
    Order order3 = new Order(3l,.15,129.99,"userTester");

    OrderDetail od1 = new OrderDetail(1L,129.99,1,"sword name",order1);
    OrderDetail od2 = new OrderDetail(2L,100,1,"sword name",order2);
    OrderDetail od3 = new OrderDetail(3L,129.99,1,"sword name",order3);

    List<Order> allOrders = new ArrayList<>(Arrays.asList(order1,order2,order3));
    List<OrderDetail> allOrderDetails = new ArrayList<>(Arrays.asList(od1,od2,od3));

    @BeforeEach
    public void setup(){
        MockitoAnnotations.openMocks(this);
//        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(orderController).build();
    }

    @Test
    public void getAllOrdersTest_Success() throws Exception {

        Mockito.when(orderDetailRepo.findAll()).thenReturn(allOrderDetails);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/all-orders")
                .content(String.valueOf(MediaType.APPLICATION_JSON)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(3)));

    }

    @Test
    public void createOrderTest_Success() throws Exception {

        String file = objectWriter.writeValueAsString(order1);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/create-order")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(file);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk());
    }

}
