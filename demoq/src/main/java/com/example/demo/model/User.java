package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="mansysusers")
public class User {
    @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "empid")
    private int id;
    @Column(name = "firstname")
    private String firstname;


    @Column(name = "lname")
    private String lname;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "active")
    private boolean active;
    @Column(name = "roles")
    private String roles;






    public User() { }

    public User(String fname, String lname,String username, String password, String roles) {
        this.firstname = fname;
        this.lname=lname;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    public int getId() {
        return id;
    }


    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getfName() {
        return firstname;
    }

    public void setfName(String name) {
        this.firstname = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", fname='" + firstname + '\'' +
                ", lname='" + lname + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", active=" + active +
                ", roles='" + roles + '\'' +
                '}';
    }
}