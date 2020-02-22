package com.kainos.questionscrud.question.repository

import com.kainos.questionscrud.question.model.Question
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(path = "questions")
interface QuestionDao: MongoRepository<Question, String> {

    fun findQuestionByCategories(categories: List<String>)
}