package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Prediction;
import com.codeclan.example.BragginRights.projections.EmbedPlayer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPlayer.class)
public interface PredictionRepo extends JpaRepository<Prediction, Long> {
}
