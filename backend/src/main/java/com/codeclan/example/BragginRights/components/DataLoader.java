package com.codeclan.example.BragginRights.components;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.models.Player;
import com.codeclan.example.BragginRights.models.Predictable;
import com.codeclan.example.BragginRights.models.Prediction;
import com.codeclan.example.BragginRights.repositories.ContestRepo;
import com.codeclan.example.BragginRights.repositories.PlayerRepo;
import com.codeclan.example.BragginRights.repositories.PredictableRepo;
import com.codeclan.example.BragginRights.repositories.PredictionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ContestRepo contestRepo;

    @Autowired
    PlayerRepo playerRepo;

    @Autowired
    PredictableRepo predictableRepo;

    @Autowired
    PredictionRepo predictionRepo;


    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) {
        Contest contest1 = new Contest("Korfball");
        contestRepo.save(contest1);

        Predictable predictable1 = new Predictable("Champion", contest1);
        predictableRepo.save(predictable1);

        Predictable predictable2 = new Predictable("Top Scorer", contest1);
        predictableRepo.save(predictable2);

        Player player1 = new Player("Jen");
        playerRepo.save(player1);

        Prediction prediction1 = new Prediction("PKC", player1, predictable1);

        predictionRepo.save(prediction1);

        Prediction prediction2 = new Prediction("Split", player1, predictable2);
//        predictionRepo.save(prediction2);
        player1.addPrediction(prediction1);
        player1.addPrediction(prediction2);
        playerRepo.save(player1);


//        Player player2 = new Player("Catherine");
//        playerRepo.save(player2);
//
//        Prediction prediction3 = new Prediction(player2, predictable1, "Top");
//        predictionRepo.save(prediction3);
//
//        Prediction prediction4 = new Prediction(player2, predictable2, "Snell");
//        predictionRepo.save(prediction4);
//        playerRepo.save(player2);
     }
}
