package com.codeclan.example.BragginRights.controllers;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.repositories.ContestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value= "/contests")
public class ContestController {

    @Autowired
    ContestRepo contestRepo;

    @GetMapping
    public List<Contest> getAllContests(){
        return contestRepo.findAll();
    }
}
