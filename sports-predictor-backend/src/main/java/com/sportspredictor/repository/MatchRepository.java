package com.sportspredictor.repository;

import com.sportspredictor.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match, Long> {
    // Możesz dodać własne metody wyszukiwania, jeśli potrzebujesz
}
