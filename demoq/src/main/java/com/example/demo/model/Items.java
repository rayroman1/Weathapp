package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "items")
public class Items {




        @Id
        @Column(name = "itemid")
        @GeneratedValue(strategy = GenerationType.AUTO)
        int id =0;
    @Column(name = "itemname")
        String product="";


    @Column(name = "purchasedate")
        Date purchasedate;

    @Column(name = "expdate")
        Date expdate;

    @Column(name = "itemquantity")
        int quantity=0;

    @Column(name = "price")
    float price=0;


    public int getId() {
        return id;
    }



    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public Date getPurchasedate() {
        return purchasedate;
    }

    public void setPurchasedate(Date purchasedate) {
        this.purchasedate = purchasedate;
    }

    public Date getExpdate() {
        return expdate;
    }

    public void setExpdate(Date expdate) {
        this.expdate = expdate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }



        Items()
        {

        }

        public Items(String product, Date purchasedate, Date expdate, int quantity,  float price) {
            this.product = product;
            this.purchasedate = purchasedate;
            this.expdate = expdate;
            this.quantity = quantity;

            this.price = price;
        }

    @Override
    public String toString() {
        return "Items{" +
                "id=" + id +
                ", product='" + product + '\'' +
                ", purchasedate=" + purchasedate +
                ", expdate=" + expdate +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}
