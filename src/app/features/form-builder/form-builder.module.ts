import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilderRouting } from './form-builder-routing.module';
import { FormBuilderPageComponent } from './pages/form-builder-page/form-builder-page.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListQuestionsComponent } from './components/list-questions/list-questions.component';


@NgModule({
  declarations: [
    FormBuilderPageComponent,
    AddQuestionComponent,
    ListQuestionsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormBuilderRouting,
    SharedModule
  ],
  providers: [],
})
export class FormBuilderModule { }
