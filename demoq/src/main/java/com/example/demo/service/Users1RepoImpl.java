package com.example.demo.service;


import com.example.demo.model.User;
import com.example.demo.repo.People1Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Users1RepoImpl {


    @Autowired
    People1Repo w;
    public List<User> getAllUsers()
    {

        return w.findAll();
    }
    public String addUser( User f){

        w.save(f);
        return "User Added";
    }
    public String deleteUserById( int id){

        w.deleteById(id);
        return "User deleted";
    }

    public Optional<User> getUserById(int f)
    {
        return w.findById(f);
    }
}
