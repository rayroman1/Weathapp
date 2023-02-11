package com.example.Getapi2.Getapi2.service;

import com.example.Getapi2.Getapi2.model.MShoes1;
import com.example.Getapi2.Getapi2.repo.MensShoesRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public  class MShoeRepImpl  {

    @Lazy
    @Autowired
    MensShoesRep w;
    public List<MShoes1> getallshoes(){
        return w.findAll();
    }
    public Optional<MShoes1> findshoebyid(int k)
    {
        return w.findById(k);
    }

}
