package com.codeclan.example.BragginRights.projections;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.models.Prediction;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;
import java.util.List;

@Projection(name = "embedPrediction", types = Guessable.class)
public interface EmbedPrediction {
    String getId();
    String getTitle();
    Contest getContest();
    String getResult();
    List<Prediction> getPredictions();
}
