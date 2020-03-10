package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Prediction;
import com.codeclan.example.BragginRights.projections.EmbedPlayers;
import com.codeclan.example.BragginRights.projections.EmbedPredictions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPlayers.class)
public interface PredictionRepo extends JpaRepository<Prediction, Long> {
}
