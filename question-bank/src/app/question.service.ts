import { Injectable } from '@angular/core';

import { Question } from './question';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionsUrl = 'api/questions';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private messagesService: MessagesService) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl)
      .pipe(
        tap(_ => this.log('fetched questions')),
        catchError(this.handleError<Question[]>('getQuestions', []))
      );
  }
  //FIXME: call random questions and save those questions on userside (cache).
  getQuestionsForInterview(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl)
      .pipe(
        tap(_ => this.log('fetched questions')),
        catchError(this.handleError<Question[]>('getQuestions', []))
      );
  }

  getQuestion(id: number): Observable<Question> {
    this.messagesService.add(`Fetching Question with id: ${id}`);
    const url = `${this.questionsUrl}/${id}`
    return this.http.get<Question>(url).pipe(
      tap(_ => this.log(`fetched question id=${id}`)),
      catchError(this.handleError<Question>(`getQuestion id=${id}`))
    );
  }

  updateQuestion(question: Question): Observable<any> {
    return this.http.put(this.questionsUrl, question, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id = ${question.id}`)),
      catchError(this.handleError<any>('updateQuestion'))
    )
  }

  addQuestion(question: Question): Observable<Question> {

    return this.http.post(this.questionsUrl, question, this.httpOptions).pipe(
      tap((newQuestion: Question) => this.log(`added new question w/ id=${newQuestion.id}`)),
      catchError(this.handleError<Question>('addQuestion'))
    )
  }

  private log (msg) {
    console.error(msg);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
