import { NgModule } from '@angular/core';

import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
