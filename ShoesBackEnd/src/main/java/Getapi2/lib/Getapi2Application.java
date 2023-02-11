package com.example.Getapi2.Getapi2.lib;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
@ComponentScan(basePackages = {"com.example.Getapi2.Getapi2.controller,com.example.Getapi2.Getapi2.service,com.example.Getapi2.Getapi2"})
@EnableJpaRepositories(basePackages = "com.example.Getapi2.Getapi2.repo")
@EntityScan("com.example.Getapi2.Getapi2.model")

public class Getapi2Application {

	public static void main(String[] args) {
		SpringApplication.run(Getapi2Application.class, args);
	}

}
