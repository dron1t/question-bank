import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';


const routes: Routes = [
  {path: 'questions', component: QuestionListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/new/:newQuestionId', component: QuestionEditorComponent},
  {path: 'detail/:id', component: QuestionEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
