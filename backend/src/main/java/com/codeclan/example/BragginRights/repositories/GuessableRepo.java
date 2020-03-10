package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.projections.EmbedGuessables;
import com.codeclan.example.BragginRights.projections.EmbedPredictions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPredictions.class)
public interface GuessableRepo extends JpaRepository<Guessable, Long> {
}
