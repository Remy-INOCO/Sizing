package com.GK.sizing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.GK.sizing")
public class SizingApplication {

	public static void main(String[] args) {
		SpringApplication.run(SizingApplication.class, args);
	}

}
