package com.keyin.finalSprint.sword.service;

import com.keyin.finalSprint.sword.exceptions.SwordNotAcceptedException;
import com.keyin.finalSprint.sword.exceptions.SwordNotFoundException;
import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.repository.SwordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

// The service class is where all your "business logic" goes for your controllers. Basically, all the
// code that you do before you lastly save or get from the database goes here; autowired to use class.
@Service
public class SwordService {

    @Autowired
    SwordRepository swordRepo;

    public Sword serveSwordByID(String id){
        Optional<Sword> swordReturned = swordRepo.findById(Long.parseLong(id));
        Sword swordFound;
        if(swordReturned.isPresent()){
            swordFound = swordReturned.get();
            return swordFound;
        } else {
            throw new SwordNotFoundException(Long.parseLong(id));
        }
    }

    public List<Sword> serveSwordByType(String type){
        List<Sword> completeList = swordRepo.findAll();
        List<Sword> filteredList = new ArrayList<>();
        completeList.forEach((sword)->{
            if(Objects.equals(sword.getType(), type)){
                filteredList.add(sword);
            }
        });
        if(filteredList.isEmpty()){
            throw new SwordNotFoundException();
        } else {
            return filteredList;
        }
    }

    public Sword replaceSword(Sword swordReplacement, String id){
        Optional<Sword> swordReturned = swordRepo.findById(Long.parseLong(id));
        Sword swordUpdated;
        if(swordReturned.isPresent()){
            swordUpdated = swordReturned.get();
            swordUpdated.setDescription(swordReplacement.getDescription());
            swordUpdated.setType(swordReplacement.getType());
            swordUpdated.setLength(swordReplacement.getLength());
            swordUpdated.setMass(swordReplacement.getMass());
            swordUpdated.setName(swordReplacement.getName());
            swordUpdated.setPrice(swordReplacement.getPrice());
            swordUpdated.setImage_url(swordReplacement.getImage_url());
            swordRepo.save(swordUpdated);
            return swordUpdated;
        } else {
            throw new SwordNotFoundException(Long.parseLong(id));
        }
    }

    public Sword editSword(Sword sword, String id){
        Optional<Sword> swordReturned = swordRepo.findById(Long.parseLong(id));
        Sword swordUpdated;
        if(swordReturned.isPresent()){
            swordUpdated = swordReturned.get();
            if(sword.getType() != null){
                swordUpdated.setType(sword.getType());
            }
            if(sword.getName() != null){
                swordUpdated.setName(sword.getName());
            }
            if(sword.getPrice() != 0){
                swordUpdated.setPrice(sword.getPrice());
            }
            if(sword.getMass() != 0){
                swordUpdated.setMass(sword.getMass());
            }
            if(sword.getLength() != 0){
                swordUpdated.setLength(sword.getLength());
            }
            if(sword.getDescription() != null){
                swordUpdated.setDescription(sword.getDescription());
            }
            if(sword.getImage_url() != null){
                String url = sword.getImage_url();
                if(url.startsWith("https")){
                    swordUpdated.setImage_url(sword.getImage_url());
                } else {
                    throw new SwordNotAcceptedException("ERROR - Invalid url, must start with 'https'");
                }
            }
            swordRepo.save(swordUpdated);
            return swordUpdated;
        } else {
            throw new SwordNotFoundException(Long.parseLong(id));
        }
    }
}
