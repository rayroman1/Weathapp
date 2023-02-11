package com.example.demo.repo;

import com.example.demo.model.Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface Inventory1Repo extends JpaRepository<Items,Integer> {

 /*   public List<Items> getAllItems();*/

    //add item
  /*  public String addItem( Items f);*/
    //remove item
    public String deleteItemById( int id);

    Items getItemById(int g);

}
