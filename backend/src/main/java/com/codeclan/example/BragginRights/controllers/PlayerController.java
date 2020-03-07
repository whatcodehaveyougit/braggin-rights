package com.codeclan.example.BragginRights.controllers;

import com.codeclan.example.BragginRights.models.Player;
import com.codeclan.example.BragginRights.repositories.PlayerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/players")
public class PlayerController {
    @Autowired
    PlayerRepo playerRepo;

    @GetMapping
    public List<Player> getAllPlayers(){
        return playerRepo.findAll();
    }
}
