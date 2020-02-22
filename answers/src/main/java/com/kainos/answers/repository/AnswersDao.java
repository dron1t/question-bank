package com.kainos.answers.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.kainos.answers.model.Answer;

@RepositoryRestResource(path = "answers")
public interface AnswersDao extends MongoRepository<Answer, String> {

    List<Answer> getAllByCandidateId(String candidateId);
}