package com.codeclan.example.BragginRights.repositories;

import com.codeclan.example.BragginRights.models.Contest;
import com.codeclan.example.BragginRights.projections.EmbedGuessables;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedGuessables.class)
public interface ContestRepo extends JpaRepository<Contest, Long> {

}
