package com.example.Getapi2.Getapi2.repo;

import com.example.Getapi2.Getapi2.model.ProductsDTO;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductsDTORep extends JpaRepository<ProductsDTO,Integer>,ProductsDTORepCustom {

}
