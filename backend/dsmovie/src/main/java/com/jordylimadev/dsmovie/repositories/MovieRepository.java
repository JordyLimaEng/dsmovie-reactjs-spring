package com.jordylimadev.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jordylimadev.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
}
