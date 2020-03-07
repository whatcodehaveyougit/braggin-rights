package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Predictable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PredictableRepo extends JpaRepository<Predictable, Long> {
}
