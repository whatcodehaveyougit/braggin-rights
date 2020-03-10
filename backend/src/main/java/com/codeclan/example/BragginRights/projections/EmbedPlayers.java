package com.codeclan.example.BragginRights.projections;

import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.models.Player;
import com.codeclan.example.BragginRights.models.Prediction;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedPlayers", types = Prediction.class)
public interface EmbedPlayers {
    Long getId();
    String getName();
    Player getPlayers();
}
