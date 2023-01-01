package com.keyin.finalSprint.user.controller;


import com.keyin.finalSprint.user.model.User;
import com.keyin.finalSprint.user.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class UserController {
    @Autowired
    UserRepository userRepo;

    @GetMapping("/users")
    public List<User> listUsers() {
        return userRepo.findAll();
    }

    @PostMapping("/login")
    public void addSession(@RequestBody User user, HttpServletRequest request) {
        @SuppressWarnings("unchecked")
        List<String> messages = (List<String>) request.getSession().getAttribute("SESSION_MESSAGE");
        if(messages == null) {
            messages = new ArrayList<>();
            request.getSession().setAttribute("SESSION", messages);
        } else {
            messages.add(Long.toString(user.getId()));
            request.getSession().setAttribute("SESSION", messages);
        }
    }

    @PostMapping("/logout")
    public void destroySession(HttpServletRequest request) {
        request.getSession().invalidate();

    }

    @PostMapping("/register")
    public User processRegister(@RequestBody User user, HttpServletResponse res) {
        List<User> users = userRepo.findAll();
        for (int i = 0; i < users.size(); i++) {
            User comparePassword = users.get(i);
            if (Objects.equals(user.getUsername(), comparePassword.getUsername())) {
                res.setStatus(HttpServletResponse.SC_CONFLICT);
                return null;
            }
        }
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

       return userRepo.save(user);

    }

}