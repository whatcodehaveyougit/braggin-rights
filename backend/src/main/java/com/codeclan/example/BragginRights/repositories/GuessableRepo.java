package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.projections.EmbedGuessable;
import com.codeclan.example.BragginRights.projections.EmbedPrediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPrediction.class)
public interface GuessableRepo extends JpaRepository<Guessable, Long> {
}
