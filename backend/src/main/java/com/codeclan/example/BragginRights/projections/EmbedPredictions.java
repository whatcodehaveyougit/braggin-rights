package com.codeclan.example.BragginRights.projections;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.models.Prediction;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedPredictions", types = Guessable.class)
public interface EmbedPredictions {
    Long getId();
    String getTitle();
    String getResult();
    Prediction getPredictions();
}
