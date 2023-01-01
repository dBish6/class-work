package com.keyin.finalSprint.user.repository;


import com.keyin.finalSprint.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

//@RepositoryRestResource(collectionResourceRel = "user", path = "user")

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // List<User> findByUserName(@Param("username") String username);

}

