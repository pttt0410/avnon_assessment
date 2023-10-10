import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'builder', 
    loadChildren: () => import('./features/form-builder/form-builder.module').then(m => m.FormBuilderModule),
  },
  {
    path: 'answer', 
    loadChildren: () => import('./features/form-answer/form-answer.module').then(m => m.FormAnswerModule),
  },
  {
    path: '',
    redirectTo: 'builder',
    pathMatch: 'full',

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
