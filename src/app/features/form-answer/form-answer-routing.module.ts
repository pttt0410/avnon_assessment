import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAnswerPageComponent } from './pages/form-answer-page/form-answer-page.component';

const routes: Routes = [
  {
    path: '',
    component: FormAnswerPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormAnswerRouting { }