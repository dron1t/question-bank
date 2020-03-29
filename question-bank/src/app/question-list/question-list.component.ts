import { Component, OnInit } from '@angular/core';
import { Question } from './../question';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  selectedQuestion: Question;
  newQuestionId: number; //FIXME: remove when connecting to backend
  questions: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(
      questions => {
        this.questions = questions;
        this.newQuestionId = questions[questions.length -1].id + 1; //FIXME: remove when connecting to backend
      }
    );
  }

}
