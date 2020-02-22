import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Question } from '../question';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(
      questions => {
        console.log(questions);
        this.questions = questions.slice(0, 5);
      }
    );
  }
}
