package com.keyin.finalSprint.order.controller;

import com.keyin.finalSprint.order_detail.model.OrderDetail;
import com.keyin.finalSprint.order_detail.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.keyin.finalSprint.order.service.OrderService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class OrderController {

    @Autowired
    OrderDetailRepository orderDetailRepo;

    @Autowired
    OrderService orderService;

    @GetMapping("/all-orders")
    public List<OrderDetail> getAllOrders(){

        return orderDetailRepo.findAll();
    }

    @PostMapping("/create-order")
    public void createOrder(@RequestBody String file){

        orderService.savePostRequestToDb(file);
    }

}
