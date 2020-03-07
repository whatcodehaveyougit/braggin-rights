package com.codeclan.example.BragginRights.controllers;

import com.codeclan.example.BragginRights.models.Predictable;
import com.codeclan.example.BragginRights.repositories.PredictableRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/predictables")
public class PredictableController {
    @Autowired
    PredictableRepo predictableRepo;

    @GetMapping
    public List<Predictable> getAllPredictables(){
        return predictableRepo.findAll();
    }

}
