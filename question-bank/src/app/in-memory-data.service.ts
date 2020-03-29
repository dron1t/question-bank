import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const questions = [
      {
        id: 1,
        text: 'Can you explain polymorphism in OOP',
        categories: 'OOP,Java,C#',
        answer: 'abc',
        relatedQuestions: []
      },
      {
        id: 2,
        text: 'Can you name some new features of Java 11 compared to Java 8',
        categories: 'Java',
        answer: 'abc',
        relatedQuestions: []
      }
    ];
    return {questions};
  }
}
