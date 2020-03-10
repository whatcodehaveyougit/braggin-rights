package com.codeclan.example.BragginRights.projections;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.models.Prediction;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedGuessable", types = Contest.class)
public interface EmbedGuessable {
    String getId();
    String getTitle();
    List<Guessable> getGuessables();
}
