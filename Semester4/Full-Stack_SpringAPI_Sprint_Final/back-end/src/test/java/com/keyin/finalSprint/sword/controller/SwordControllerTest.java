package com.keyin.finalSprint.sword.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.repository.SwordRepository;
import com.keyin.finalSprint.sword.service.SwordService;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class SwordControllerTest {

    private MockMvc mockMvc;

    ObjectMapper objectMapper = new ObjectMapper();
    ObjectWriter objectWriter = objectMapper.writer();

    @Mock
    SwordRepository swordRepo;

    @Mock
    SwordService SS;

    @InjectMocks
    SwordController swordController;

    Sword sword1 = new Sword(1,"sword 1","LongSword",12,4,12.99,"A real long sword","https://longsword.cpm");
    Sword sword2 = new Sword(2,"sword 2","ShortSword",12,4,12.99,"A real short sword","https://shortsword.cpm");
    Sword sword3 = new Sword(3,"sword 3","Dagger",12,4,12.99,"is this even a sword","https://dagger.cpm");

    List<Sword> allSwords = new ArrayList<>(Arrays.asList(sword1,sword2,sword3));

    @BeforeEach
    public void setup(){
        MockitoAnnotations.openMocks(this);
//        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(swordController).build();
    }

    @Test
    public void getAllSwordsTest_Success() throws Exception{

        when(swordRepo.findAll()).thenReturn(allSwords);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/swords")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(3)));
    }

    @Test
    public void getSwordByIdTest_Success() throws Exception{

        when(SS.serveSwordByID("1")).thenReturn(sword1);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/sword/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(result -> containsString("sword 1"));
    }

    @Test
    public void getSwordByTypeTest_Success() throws Exception{

        Sword sword4 = new Sword(4,"sword 4","LongSword",36,12,129.99,"Another real long sword","https://www.longsword.com");
        List<Sword> longSwords = new ArrayList<>(Arrays.asList(sword1,sword4));

        when(SS.serveSwordByType("LongSword")).thenReturn(longSwords);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/sword/type/LongSword")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(2)));
    }

    // Need to fix...
    @Test
    public void addSwordTest_Success() throws Exception {

        Sword sword5 = new Sword("sword 5","Dagger",12,4,12.99,"is this even a sword","https://dagger.cpm");
        String postedSword = objectWriter.writeValueAsString(sword5);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/sword")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(postedSword);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(result -> containsString("sword 5"));
    }

    @Test
    public void editSwordTest_Success() throws Exception {

        Sword swordUpdate = new Sword();
        swordUpdate.setType("Dagger");
        String postedSword = objectWriter.writeValueAsString(swordUpdate);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.patch("/api/sword/1")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(postedSword);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(result -> containsString("Dagger"));
    }

    @Test
    public void deleteSwordTest_Success() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                .delete("/api/sword/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

}
