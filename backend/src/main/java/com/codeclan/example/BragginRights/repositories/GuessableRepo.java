package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Guessable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuessableRepo extends JpaRepository<Guessable, Long> {
}
