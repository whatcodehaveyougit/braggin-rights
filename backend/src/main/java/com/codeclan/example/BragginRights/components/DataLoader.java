package com.codeclan.example.BragginRights.components;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.models.Player;
import com.codeclan.example.BragginRights.models.Prediction;
import com.codeclan.example.BragginRights.repositories.ContestRepo;
import com.codeclan.example.BragginRights.repositories.GuessableRepo;
import com.codeclan.example.BragginRights.repositories.PlayerRepo;
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
    GuessableRepo guessableRepo;

    @Autowired
    PredictionRepo predictionRepo;


    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) {
        Contest contest1 = new Contest("Korfball");
        contestRepo.save(contest1);

        Guessable guessable1 = new Guessable("Champion", contest1);
        guessableRepo.save(guessable1);

        Guessable guessable2 = new Guessable("Top Scorer", contest1);
        guessableRepo.save(guessable2);

        Player player1 = new Player("Jen");
        playerRepo.save(player1);

        Prediction prediction1 = new Prediction("PKC", player1, guessable1);

        predictionRepo.save(prediction1);

        Prediction prediction2 = new Prediction("Split", player1, guessable2);
        predictionRepo.save(prediction2);


        Player player2 = new Player("Catherine");
        playerRepo.save(player2);

        Prediction prediction3 = new Prediction("Top", player2, guessable1);
        predictionRepo.save(prediction3);

        Prediction prediction4 = new Prediction("Snell", player2, guessable1);
        predictionRepo.save(prediction4);
     }
}
