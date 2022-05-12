package com.jordylimadev.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jordylimadev.dsmovie.entities.Score;
import com.jordylimadev.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
	
}
