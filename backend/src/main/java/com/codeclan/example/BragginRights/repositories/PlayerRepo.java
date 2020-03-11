package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Player;
import com.codeclan.example.BragginRights.projections.EmbedPlayer;
import com.codeclan.example.BragginRights.projections.EmbedPrediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface PlayerRepo extends JpaRepository<Player, Long> {
}
