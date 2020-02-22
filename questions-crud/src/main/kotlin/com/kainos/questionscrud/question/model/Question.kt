package com.kainos.questionscrud.question.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "questions")
data class Question(val questionText: String,
                    @Id val id: String?,
                    val answer: String,
                    val similarQuestions: List<Question>?,
                    val categories: List<String>) {}