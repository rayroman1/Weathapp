package com.example.demo.repo;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface People1Repo extends JpaRepository<User,Integer> {

   /* public List<User> getAllUsers();*/

    //add user
  /*  public String addUser( User f);*/
    //remove user
    public String deleteUserById( int id);

    User getUserById(int g);
}
