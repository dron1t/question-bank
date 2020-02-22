import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { QuestionService } from '../question.service';
import { Observable, of } from 'rxjs';
import { Question } from '../question';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let EXPECTED_QUESTIONS: Question[] = [];
  let questionService: QuestionService
  class MockQuestionService {
    getQuestions(): Observable<Question[]> {
      return of(EXPECTED_QUESTIONS);
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        DashboardComponent,
        { provide: QuestionService, useClass: MockQuestionService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.get(DashboardComponent);
    questionService = TestBed.get(QuestionService);
  });

  it('should not have questions defined', () => {
    expect(component.questions).toBeUndefined();
  });
  
  it('should have questions length to expected questions length after ngOnInit', () => {
    component.ngOnInit();
    expect(component.questions.length).toEqual(EXPECTED_QUESTIONS.length)
  });
});
