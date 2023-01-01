package com.keyin.finalSprint.sword.repository;

import com.keyin.finalSprint.sword.model.Sword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

//@RepositoryRestResource(collectionResourceRel = "swords",path = "swords")
@Repository
public interface SwordRepository extends JpaRepository<Sword, Long> {

    @Query(
            value = "SELECT * FROM sword WHERE (name LIKE CONCAT(\"%\",:param,\"%\"));",
            nativeQuery = true)
    List<Sword> query(String param);

}
