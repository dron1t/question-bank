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
    id: -1,
    text: 'Add question here',
    categories: 'Add comma separated categories',
    answer: 'Write expected answer here',
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
    if (id) {
      this.questionService.getQuestion(id)
        .subscribe(question => this.question = question);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.question.id > 0) {
      this.questionService.updateQuestion(this.question)
        .subscribe(() => this.goBack())
    } else {
      this.questionService.addQuestion(this.question)
        .subscribe(() => this.goBack());
    }
  }
}
