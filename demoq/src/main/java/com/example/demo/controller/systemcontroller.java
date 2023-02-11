package com.example.demo.controller;


import com.example.demo.model.Items;
import com.example.demo.model.User;
import com.example.demo.service.Items1RepoImpl;
import com.example.demo.service.Users1RepoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class systemcontroller {

    @Autowired
    public Items1RepoImpl a;
    @Autowired
    public Users1RepoImpl b;

    @GetMapping("/")
    public String hello() {
        return new String("Hello Users");
    }

    @GetMapping("/users3")
    public List<User> getallusers() {
        return b.getAllUsers ();
    }

    @GetMapping("/items3")
    public List<Items> getallitems() {
        return a.getAllItems ();
    }

    @PostMapping("/items1")
    public String additem(@RequestBody Items t) {
        a.addItem(t);
        return "Added Item";
    }
    @PostMapping("/user1")
    public String adduser(@RequestBody User t) {
        b.addUser(t);
        return "Added user";
    }
    @DeleteMapping("/deltuser/{id}")
    public String deltuser(@PathVariable("id") int id)
    {
        b.deleteUserById(id);

        return "User deleted";
    }
    @DeleteMapping("/deltitem/{id}")
    public String deltitem(@PathVariable("id") int id)
    {
        a.deleteItemById(id);

        return "Item deleted";
    }


    @GetMapping("/user2/{k}")
    public Optional<User> finduserbyid(@PathVariable int k) {
        return b.getUserById (Integer.valueOf(k));
    }

    @GetMapping("/items2/{k}")
    public Optional<Items> finditembyid(@PathVariable int k) {
        return a.getItemById (Integer.valueOf(k));
    }

    @PutMapping("/itemsa/{id}")
    public String updateItem(@PathVariable(value = "id") Integer ItemId,
                                                @RequestBody Items itemDetails) throws ResourceNotFoundException { // @Valid
        Items item1 = a.getItemById(ItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + ItemId));

        item1.setProduct(itemDetails.getProduct());
        item1.setPurchasedate(itemDetails.getPurchasedate());
        item1.setExpdate(itemDetails.getExpdate());
        item1.setQuantity(itemDetails.getQuantity());
        item1.setPrice(itemDetails.getPrice());


        final String updatedItem = a.addItem(item1);
        return "Udpdated";//ResponseEntity.ok(updatedEmployee);
    }

}
