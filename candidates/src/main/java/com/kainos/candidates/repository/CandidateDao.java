package com.kainos.candidates.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.kainos.candidates.model.Candidate;

@RepositoryRestResource(path = "candidates")
public interface CandidateDao extends MongoRepository<Candidate, String> {

    Candidate findCandidateByName(final String name);
}
