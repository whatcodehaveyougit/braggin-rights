package com.codeclan.example.BragginRights.projections;

import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.models.Player;
import com.codeclan.example.BragginRights.models.Prediction;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedPlayer", types = Prediction.class)
public interface EmbedPlayer {
    Long getId();
    String getPredictionTitle();
    Player getPlayer();
    Guessable getGuessable();
}
