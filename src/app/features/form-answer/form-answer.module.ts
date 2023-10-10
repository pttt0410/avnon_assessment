import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormAnswerPageComponent } from './pages/form-answer-page/form-answer-page.component';
import { FormAnswerRouting } from './form-answer-routing.module';


@NgModule({
  declarations: [

    FormAnswerPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormAnswerRouting,
  ],
  providers: [],
})
export class FormAnswerModule { }
