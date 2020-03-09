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

//        Korfball Contest:

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

        Prediction prediction4 = new Prediction("Snell", player2, guessable2);
        predictionRepo.save(prediction4);

//        Football Contest

        Contest contest2 = new Contest("Premier League");
        contestRepo.save(contest2);

        Guessable guessable3 = new Guessable("League Winner", contest2);
        guessableRepo.save(guessable3);

        Guessable guessable4 = new Guessable("Bottom of Table", contest2);
        guessableRepo.save(guessable4);

        Guessable guessable5 = new Guessable("Top Scorer", contest2);
        guessableRepo.save(guessable5);

        Player player3 = new Player("Siggy");
        playerRepo.save(player3);

        Prediction prediction5 = new Prediction("Liverpool", player3, guessable3);
        predictionRepo.save(prediction5);

        Prediction prediction6 = new Prediction("Aston Villa", player3, guessable4);
        predictionRepo.save(prediction6);

        Prediction prediction7 = new Prediction("Harry Kane", player3, guessable5);
        predictionRepo.save(prediction7);

        Player player4 = new Player("Jamie");
        playerRepo.save(player4);

        Prediction prediction8 = new Prediction("Liverpool", player4, guessable3);
        predictionRepo.save(prediction8);

        Prediction prediction9 = new Prediction("Southampton", player4, guessable4);
        predictionRepo.save(prediction9);

        Prediction prediction10 = new Prediction("Jamie Vardy", player4, guessable5);
        predictionRepo.save(prediction10);

     }
}
