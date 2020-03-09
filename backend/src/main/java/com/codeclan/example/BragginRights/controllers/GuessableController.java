package com.codeclan.example.BragginRights.controllers;

import com.codeclan.example.BragginRights.models.Guessable;
import com.codeclan.example.BragginRights.repositories.GuessableRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/guessables")
public class GuessableController {
    @Autowired
    GuessableRepo guessableRepo;

    @GetMapping
    public List<Guessable> getAllGuessables(){
        return guessableRepo.findAll();
    }

}
