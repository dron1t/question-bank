import { Injectable } from '@angular/core';

import { Question } from './question';
import { QUESTIONS } from './mock_questions';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private messagesService: MessagesService) { }

  getQuestions(): Observable<Question[]> {
    this.messagesService.add("Fetching messages");
    return of(QUESTIONS);
  }

  getQuestion(id: number): Observable<Question> {
    this.messagesService.add(`Fetching Question with id: ${id}`);
    return of(QUESTIONS.find(q => q.id === id));
  }
}
