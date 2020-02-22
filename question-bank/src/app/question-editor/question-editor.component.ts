import { Component, OnInit, Input } from '@angular/core';
import { Question } from './../question';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from './../question.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {

  @Input() question: Question = {
    id: 1,
    text: 'Can you explain polymorphism',
    categories: 'OOP, Java',
    answer: 'is an object-oriented programming concept' +
    'that refers to the ability of a variable, function' +
    'or object to take on multiple forms. A language' +
    'that features polymorphism allows developers to ' +
    'program in the general rather than program in ' +
    'the specific.',
    relatedQuestions: []
  };

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestion(id)
    .subscribe(question => this.question = question);
  }

  goBack(): void {
    this.location.back();
  }

}
