package com.example.demo.service;

import com.example.demo.model.Items;
import com.example.demo.repo.Inventory1Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Items1RepoImpl {


    @Autowired
    Inventory1Repo w;

    public String addItem(Items f) {
        w.save(f);

        return "Item added";
    }

    public String deleteItemById(int id) {

        w.deleteById(id);

        return "Item deleted";
    }

    public List<Items> getAllItems()
    {

return w.findAll();
    }
    public Optional<Items> getItemById(int f)
    {
        return w.findById(f);
    }
}
