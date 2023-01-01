package com.keyin.finalSprint.user.controller;
import com.keyin.finalSprint.user.model.User;
import com.keyin.finalSprint.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest {

    private MockMvc mockMvc;

    @Mock
    UserRepository userRepo;

    @InjectMocks
    UserController userController;

    @BeforeEach
    public void setup(){
        MockitoAnnotations.openMocks(this);
//        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    User user1 = new User("user1","password","email","phone");
    User user2 = new User("user2","password","email","phone");
    User user3 = new User("user3","password","email","phone");

    List<User> allUsers = new ArrayList<>(Arrays.asList(user1,user2,user3));

    @Test
    public void listUsersTest_Success() throws Exception {

        Mockito.when(userRepo.findAll()).thenReturn(allUsers);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/users")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(3)));
    }

}
