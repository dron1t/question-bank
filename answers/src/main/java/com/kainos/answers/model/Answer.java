package com.kainos.answers.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "answers")
public class Answer {
    @Id
    private String id;
    private String question;
    private String answer;
    private String candidateId;
}