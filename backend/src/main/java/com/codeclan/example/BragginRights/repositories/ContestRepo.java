package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Contest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContestRepo extends JpaRepository<Contest, Long> {
}
