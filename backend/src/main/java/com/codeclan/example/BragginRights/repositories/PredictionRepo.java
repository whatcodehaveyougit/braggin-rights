package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Prediction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PredictionRepo extends JpaRepository<Prediction, Long> {
}
