package com.krish.moviesbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesbackendApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot() {
		return "Radhe Radhe!";
	}
}
