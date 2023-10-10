import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderPageComponent } from './pages/form-builder-page/form-builder-page.component';

const routes: Routes = [
  {
    path: '',
    component: FormBuilderPageComponent,
  },
//   {
//     path: '',
//     redirectTo: 'builder',
//     pathMatch: 'full'
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRouting { }