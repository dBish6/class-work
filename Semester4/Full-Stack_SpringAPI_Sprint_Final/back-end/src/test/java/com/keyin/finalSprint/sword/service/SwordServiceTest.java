package com.keyin.finalSprint.sword.service;

import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.repository.SwordRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class SwordServiceTest {

    @Mock
    private SwordRepository swordRepo;

    @InjectMocks
    private SwordService SS;

    @BeforeEach
    public void setup(){
        MockitoAnnotations.initMocks(this);
    }

    Sword sword1 = new Sword(1L,"sword 1","longsword",32,8,99.99,"One hell of a sword","https://www.killerswords.com");
    Sword sword2 = new Sword(1L,"sword 2","dagger",12,2,49.99,"One hell of a dagger","https://www.killerswords.com");
    Sword sword3 = new Sword(1L,"sword 3","short",32,8,69.99,"Short but sharp","https://www.killerswords.com");
    Sword sword4 = new Sword(1L,"sword 4","longsword",40,12,99.99,"really long, really really long","https://www.killerswords.com");
    Sword sword5 = new Sword(1L,"sword 5","mace",24,12,119.99,"Are you into bashing things","https://www.killerswords.com");
    Sword sword6 = new Sword(1L,"sword 6","dagger",32,8,89.99,"Ceremonial blade with embedded stones","https://www.killerswords.com");

    ArrayList<Sword> mockDatabase = new ArrayList<>(List.of(sword1,sword2,sword3,sword4,sword5,sword6));

    @Test
    public void serveSwordByIdTest_Success(){

//        Sword sword1 = new Sword(1L,"sword 1","Bastard Sword",32,8,99.99,"One hell of a sword","https://www.killerswords.com");

        Mockito.when(swordRepo.findById(1L)).thenReturn(Optional.of(sword1));

        Sword swordReturned = SS.serveSwordByID("1");

        Assertions.assertNotNull(swordReturned);
        Assertions.assertEquals(sword1.getName(),swordReturned.getName());
    }

    @Test
    public void serveSwordByTypeTest_Success(){
        Mockito.when(swordRepo.findAll()).thenReturn(mockDatabase);

        List<Sword> returnedList = SS.serveSwordByType("longsword");

        Assertions.assertNotNull(returnedList);
        Assertions.assertEquals(2, returnedList.size());
    }

    @Test
    public void replaceSwordTest_Success(){
        Sword swordReplacement = new Sword("replaced","dagger",32,8,89.99,"Ceremonial blade with embedded stones","https://www.killerswords.com");

        Mockito.when(swordRepo.findById(6L)).thenReturn(Optional.ofNullable(sword6));

        Sword replacedSword = SS.replaceSword(swordReplacement,"6");

        Assertions.assertNotNull(replacedSword);
        Assertions.assertEquals(swordReplacement.getName(),replacedSword.getName());
    }

    @Test
    public void editSword_Success(){
        Sword edit = new Sword();
        edit.setName("edited name");

        Mockito.when(swordRepo.findById(1L)).thenReturn(Optional.ofNullable(sword1));

        Sword updatedSword = SS.editSword(edit,"1");

        Assertions.assertNotNull(updatedSword);
        Assertions.assertEquals(edit.getName(),updatedSword.getName());

    }

}
