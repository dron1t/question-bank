import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {QUESTIONS} from "./mock_questions";
import {Question} from "./question";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {QUESTIONS};
  }

  genId(questions: Question[]): number {
    return questions.length > 0 ? Math.max(...questions.map(hero => hero.id)) + 1 : 11;
  }
}
