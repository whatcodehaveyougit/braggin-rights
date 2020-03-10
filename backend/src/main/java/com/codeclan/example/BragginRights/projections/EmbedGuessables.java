package com.codeclan.example.BragginRights.projections;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.models.Player;
import com.codeclan.example.BragginRights.models.Prediction;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedGuessables", types = Contest.class)
public interface EmbedGuessables {
    Long getId();
    String getTitle();
    Guessable getGuessables();
}
