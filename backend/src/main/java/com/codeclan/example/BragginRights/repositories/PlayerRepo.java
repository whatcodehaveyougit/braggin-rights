package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepo extends JpaRepository<Player, Long> {
}
