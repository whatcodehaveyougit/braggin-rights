package com.codeclan.example.BragginRights;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.models.Player;
import com.codeclan.example.BragginRights.models.Prediction;
import com.codeclan.example.BragginRights.repositories.ContestRepo;
import com.codeclan.example.BragginRights.repositories.GuessableRepo;
import com.codeclan.example.BragginRights.repositories.PlayerRepo;
import com.codeclan.example.BragginRights.repositories.PredictionRepo;
import org.junit.Test;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BragginRightsApplicationTests {

	@Autowired
	ContestRepo contestRepo;

	@Autowired
	GuessableRepo guessableRepo;

	@Autowired
	PlayerRepo playerRepo;

	@Autowired
	PredictionRepo predictionRepo;

	@Test
	public void contextLoads() {
	}

	@Test
	public void TestCanAddContest() {
		Contest contest1 = new Contest("Eurovision");
		contestRepo.save(contest1);
	}

	@Test
	public void TestCanAddPlayer() {
		Player player1 = new Player("Bob");
		playerRepo.save(player1);
	}

	@Test
	public void TestCanAddGuessable(){
		Contest contest1 = new Contest("Eurovision");
		contestRepo.save(contest1);
		Guessable guessable1 = new Guessable("Winner", contest1 );
	}

	@Test
	public void TestCanAddPrediction(){
		Player player1 = new Player("Bob");
		playerRepo.save(player1);
		Contest contest1 = new Contest("Eurovision");
		contestRepo.save(contest1);
		Guessable guessable1 = new Guessable("Winner", contest1 );
		guessableRepo.save(guessable1);
		Prediction prediction1 = new Prediction("Denmark", player1,
				guessable1);
	}
}
