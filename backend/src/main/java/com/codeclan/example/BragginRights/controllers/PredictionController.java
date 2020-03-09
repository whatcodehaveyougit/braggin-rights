package com.codeclan.example.BragginRights.controllers;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.models.Prediction;
import com.codeclan.example.BragginRights.repositories.PredictionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value="/predictions")
public class PredictionController {
    @Autowired
    PredictionRepo predictionRepo;

}
